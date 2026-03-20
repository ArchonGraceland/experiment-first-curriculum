# Module Building Guide

*Lessons learned from C2 proof-of-concept testing. Apply these rules to every module.*

---

## 1. Phenomenon Hook

**Rule: Hooks need real-world relevance — connect to something the student cares about.**

- Open with a situation the student recognizes from their own life (phone dying, car not starting, food going bad, muscles being sore).
- Give the student a reason to care *before* they start the experiment.
- Do NOT just describe a weird observation ("the needle moves") — that's not enough.
- The hook should plant a question that the Framework Connection (Section 6) answers at a higher level.

**Test:** If a 16-year-old reads the hook and thinks "so what?" — rewrite it.

---

## 2. Materials List

**Rule: Validated as-is. Be specific and complete.**

- List every item the student needs, with quantities and sizes.
- Include safety equipment.
- Include optional items separately.
- No changes needed from C2 format.

---

## 3. Experiment Steps

**Rule: One physical action per numbered step. Separate do / observe / record.**

This is the single most important lesson from C2. The steps must be written at a much finer grain size than C2 v1.

### Step design rules:

- **One action per step.** If the student has to put their hands on something twice, it's two steps.
- **Separate "do" from "observe" from "record."** Each is its own clearly labeled beat within or after the step.
- **Specific physical details every time.** Name the exact multimeter setting, which probe goes where, how far to push something in, which direction to turn something. Never assume the student knows.
- **No method sidebar mid-action.** Sidebars come after the record prompt, never woven into the doing.
- **Clear visual break between steps.** The student must be able to see at a glance: "I'm done with that, now I start this."
- **Short paragraphs.** No step should be a wall of text. If a step explanation runs longer than 3-4 sentences, break it up.

### Transitions:

- Each step should end with a clear completion signal (usually the record prompt).
- The next step should open with a clear physical action ("Pick up the..." / "Set the multimeter to..." / "Remove the...").

**Test:** If a student with ADHD loses their place mid-step, the step is too long.

---

## 4. Method Sidebars

**Rule: One sentence, after the record prompt, visually distinct.**

- Maximum one sentence identifying the scientific method skill the student just used.
- Placed AFTER the student has done the thing and recorded it — never interrupting action.
- Visually distinct from instructions (blockquote, italic, different formatting).
- Not every step needs a sidebar. Only include when a genuinely important method concept was just demonstrated.

**Test:** If removing the sidebar wouldn't change whether the student can complete the step, the sidebar is correctly placed (not load-bearing for the procedure).

---

## 5. Key Terminology Table

**Rule: Validated as-is. Keep the "You Observed It When..." column.**

- Reinforces that learning precise scientific language IS part of learning the concept.
- Anchors each term to a specific moment in the experiment.
- No changes needed from C2 format.

---

## 6. Challenge Mode

**Rule: Eliminated. No separate Challenge Mode section.**

- If a concept is worth testing, build it into the main experiment steps.
- If it's not essential to the module's learning objectives, cut it.
- Do not create "extra work" sections that feel like homework after the experiment is already done.

---

## 7. Framework Connection

**Rule: Paired with the Phenomenon Hook. They open and close the same narrative thread.**

- The hook opens with real-world relevance and a question.
- The Framework Connection answers that question at a higher level and points forward to future modules.
- Write the hook and framework connection together as a matched pair.
- This was the strongest section of C2 — maintain this level of quality.

**Test:** Read the hook, then read the framework connection. If they don't feel like two ends of the same story, rewrite one or both.

---

## 8. Glossary Entries

**Rule: Validated as-is. Keep the "I saw it when" field for student self-authoring.**

- No changes needed from C2 format.

---

## 9. Research Report

**Rule: Report structure is fine. AI feedback tool needs fixing (separate workstream).**

### Known problem:
The AI feedback questions are too vague and not grounded in the specific experiment. When a student gives a correct-but-brief answer (e.g., "I was measuring voltage"), the tool pushes back as if the answer is wrong, creating confusion and frustration.

### Fix required (in report tool, not in module):
- AI feedback must know what the student measured in this specific experiment.
- If the student's answer is correct, acknowledge it and ask them to extend — never make a correct answer feel wrong.
- Questions should reference specific data points: "You measured four voltages — which was highest?" not "Can you be more specific?"

### Module-side action:
- Report prompts in the student module are fine as-is.
- Per-module config for the report tool needs to include expected data and key terms so the AI can give grounded feedback.

---

## 10. Instructor Guide

**Rule: Validated. Must stay in sync with the student module.**

- No structural changes needed.
- When the student module is revised, update the instructor guide to match (timing, step references, troubleshooting).

---

## 11. Lab Notebook Worksheet

**Rule: Validated. Eliminate any Challenge Mode section; everything goes in the main experiment.**

- No structural changes needed beyond removing Challenge Mode.
- Keep all data tables, sketch areas, prediction prompts, and reflection prompts.

---

## Build Sequence for New Modules

1. Write the Phenomenon Hook and Framework Connection together first (they're a pair).
2. Design the experiment steps at fine grain (one action per step).
3. Identify terminology — terms are introduced at the exact moment of observation, never before.
4. Build the terminology table and glossary entries.
5. Write the research report prompts referencing the specific data the student will have collected.
6. Write the instructor guide (setup, timing, troubleshooting, coaching reference).
7. Design the lab notebook worksheet to match the experiment steps.
8. Create per-module config for the report tool (expected data, key terms, grounded feedback anchors).
