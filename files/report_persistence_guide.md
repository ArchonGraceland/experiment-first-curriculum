# Report Persistence — Implementation Guide

## What's Done

The Supabase database (`bjdkydgeanjbviksomkf`) now has two new tables:

### `students` table
| Column | Type | Notes |
|---|---|---|
| id | uuid (PK) | Auto-generated |
| display_name | text | Student's name |
| student_code | text (unique) | Simple login code — no password needed |
| created_at | timestamptz | Auto |

### `reports` table
| Column | Type | Notes |
|---|---|---|
| id | uuid (PK) | Auto-generated |
| student_id | uuid (FK → students) | Who wrote it |
| module_id | text (FK → modules) | Which module |
| status | text | 'draft' or 'complete' |
| research_question | text | Section 1 content |
| hypothesis | text | Section 2 content |
| experimental_design | text | Section 3 content |
| results | text | Section 4 content |
| analysis_conclusion | text | Section 5 content |
| next_investigation | text | Section 6 content |
| first_drafts | jsonb | `{"research_question": "...", ...}` — saved on first meaningful edit |
| feedback_history | jsonb | `[{"section": "hypothesis", "question": "...", "timestamp": "..."}]` |
| section_signals | jsonb | `{"research_question": "green", "hypothesis": "orange", ...}` |
| started_at | timestamptz | When student began |
| last_saved_at | timestamptz | Last auto-save |
| completed_at | timestamptz | When marked complete |

**Constraint:** `UNIQUE(student_id, module_id)` — one report per student per module.

**RLS:** Enabled with permissive policies. Ownership enforcement happens in the app layer via student_code lookup.

**Seeded student:** `student-alpha` / "Student 1" (for testing)

---

## Connection Details

```
Supabase URL:  https://bjdkydgeanjbviksomkf.supabase.co
Anon Key:      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZGt5ZGdlYW5qYnZpa3NvbWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwNDExNDAsImV4cCI6MjA4OTYxNzE0MH0.Q8Wa6YsGzsr1jEZQybcn4AqemEGs6VJIkTckUE88C4A
```

---

## What Needs to Be Built in the Report Tool

### 1. Add Supabase client dependency

```bash
npm install @supabase/supabase-js
```

Create `app/lib/supabase.js`:

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

Add to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://bjdkydgeanjbviksomkf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZGt5ZGdlYW5qYnZpa3NvbWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwNDExNDAsImV4cCI6MjA4OTYxNzE0MH0.Q8Wa6YsGzsr1jEZQybcn4AqemEGs6VJIkTckUE88C4A
```

Also add these to Vercel environment variables.

### 2. Student identification (no auth overhead)

The student enters their code when they first open the tool. The code is saved in a cookie or localStorage so they don't have to re-enter it.

**Login flow:**
```javascript
// Look up student by code
const { data: student } = await supabase
  .from('students')
  .select('id, display_name')
  .eq('student_code', enteredCode)
  .single();
```

**Creating new students** (instructor action — can be a simple admin page or done via Supabase dashboard):
```javascript
const { data } = await supabase
  .from('students')
  .insert({ display_name: 'Jane', student_code: 'jane-2026' })
  .select()
  .single();
```

### 3. Auto-save (the core feature)

Debounce saves to every 3 seconds of inactivity. Use `upsert` with the unique constraint.

```javascript
// Map of section keys to column names
const SECTION_COLUMNS = {
  'research-question': 'research_question',
  'hypothesis': 'hypothesis',
  'experimental-design': 'experimental_design',
  'results': 'results',
  'analysis-conclusion': 'analysis_conclusion',
  'next-investigation': 'next_investigation'
};

async function saveReport(studentId, moduleId, sections, firstDrafts, signals) {
  const row = {
    student_id: studentId,
    module_id: moduleId,
    last_saved_at: new Date().toISOString()
  };

  // Map section content to columns
  for (const [sectionKey, content] of Object.entries(sections)) {
    const col = SECTION_COLUMNS[sectionKey];
    if (col) row[col] = content;
  }

  // Include metadata
  if (firstDrafts) row.first_drafts = firstDrafts;
  if (signals) row.section_signals = signals;

  const { data, error } = await supabase
    .from('reports')
    .upsert(row, { onConflict: 'student_id,module_id' })
    .select()
    .single();

  return { data, error };
}
```

**Debounced wrapper** (call this from onChange on each textarea):
```javascript
let saveTimeout = null;

function debouncedSave(studentId, moduleId, sections, firstDrafts, signals) {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    saveReport(studentId, moduleId, sections, firstDrafts, signals);
  }, 3000);
}
```

### 4. Load existing report on open

When the student selects a module, check if they have an existing report:

```javascript
async function loadReport(studentId, moduleId) {
  const { data, error } = await supabase
    .from('reports')
    .select('*')
    .eq('student_id', studentId)
    .eq('module_id', moduleId)
    .single();

  if (error && error.code === 'PGRST116') {
    // No existing report — start fresh
    return null;
  }
  return data;
}
```

### 5. Mark complete

When the student finishes and clicks "Complete Report":

```javascript
async function completeReport(studentId, moduleId) {
  const { data, error } = await supabase
    .from('reports')
    .update({
      status: 'complete',
      completed_at: new Date().toISOString()
    })
    .eq('student_id', studentId)
    .eq('module_id', moduleId)
    .select()
    .single();

  return { data, error };
}
```

### 6. Portfolio view (browse all reports)

New page: `/portfolio` (or a section on the landing page)

```javascript
async function getPortfolio(studentId) {
  const { data, error } = await supabase
    .from('reports')
    .select(`
      id,
      module_id,
      status,
      started_at,
      last_saved_at,
      completed_at,
      modules (title, domain)
    `)
    .eq('student_id', studentId)
    .order('last_saved_at', { ascending: false });

  return data;
}
```

This gives you a list like:
```
✓ C2 — Can You Make a Battery from Fruit?  (completed Mar 15)
◐ H1 — How Much Energy Is in Your Snack?   (draft, last saved Mar 18)
◐ P1 — What Happens When You Drop Things?  (draft, last saved Mar 17)
```

Each row links to the report tool pre-loaded with that module.

### 7. Save feedback history

When the AI returns feedback, append to the history:

```javascript
async function saveFeedback(reportId, section, question) {
  // Fetch current history
  const { data } = await supabase
    .from('reports')
    .select('feedback_history')
    .eq('id', reportId)
    .single();

  const history = data.feedback_history || [];
  history.push({
    section,
    question,
    timestamp: new Date().toISOString()
  });

  await supabase
    .from('reports')
    .update({ feedback_history: history })
    .eq('id', reportId);
}
```

---

## App Changes Summary

| File | Change |
|---|---|
| `package.json` | Add `@supabase/supabase-js` |
| `app/lib/supabase.js` | New — Supabase client init |
| `.env.local` | Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| `app/page.js` | Add student code entry screen before report starts; load existing report on module select |
| Report writing component | Add `debouncedSave()` on every section change; save first_drafts and signals |
| Report completion flow | Call `completeReport()` when student finishes |
| AI feedback handler | Call `saveFeedback()` when AI returns a question |
| New: `app/portfolio/page.js` | Portfolio view — browse all reports for the logged-in student |

---

## Future: Instructor View

Because RLS allows public read on reports, you can build an instructor dashboard that:
- Lists all students and their report counts
- Shows any student's completed reports
- Filters by module to compare responses across students
- This can live on the curriculum dashboard (`dashboard.html`) as a new tab, or as a separate page in the report tool

---

## Future: Module-Agnostic Loading

Right now the report tool is hardcoded to C2. When you make it module-agnostic, the `modules` table already has `report_tool_config` (jsonb) ready for per-module config:

```javascript
// Load module config for the report tool
const { data: module } = await supabase
  .from('modules')
  .select('title, report_tool_config')
  .eq('id', moduleId)
  .single();

// report_tool_config would contain:
// { expected_data: [...], key_terms: [...], example_questions: {...} }
```

This is the same config the AI feedback needs to give grounded, experiment-aware responses — so building the persistence layer now and the module-agnostic layer next is the right sequence.
