# Curriculum Spec — Updated Sections

These are the three sections that need replacing in `curriculum_spec.md`. Copy each section over its counterpart in the live file.

---

## SECTION 2.1 — Replace existing Section 2.1

### 2.1 Module Template

| Component | Description |
|---|---|
| **Module Title** | Framed as a question (e.g., "Can you generate electricity from fruit?") |
| **Phenomenon Hook** | A 1–2 sentence scenario grounded in the student's real life that creates curiosity or cognitive dissonance. Must give the student a reason to care before the experiment starts. No terminology yet. The hook and Framework Connection are written as a matched pair — the hook plants a question that the Framework Connection answers at a higher level. |
| **Materials List** | Everything needed, with quantities, sizes, and common household substitutions noted. Target: items available at a grocery store or online for under $20. Safety equipment listed explicitly. |
| **The Experiment** | Step-by-step procedure. Written in imperative voice. **One physical action per numbered step.** Do, observe, and record are separated into distinct beats. Specific physical details every time (exact settings, which probe goes where, how far to push something). No step should be a wall of text — if it runs longer than 3–4 sentences, break it up. Each step ends with a clear completion signal (usually the record prompt). |
| **Method Sidebar** | One sentence identifying the scientific method skill the student just demonstrated. Placed after the record prompt, never interrupting action. Visually distinct (blockquote or italic). Not every step needs a sidebar — only when a genuinely important method concept was just demonstrated. See Section 4 for the scaffolding progression. |
| **Key Terminology** | 3–5 terms introduced during this module, each anchored to a specific observation. Format: Term — definition — "You Observed It When..." column linking to the exact moment in the experiment. |
| **Framework Connection** | Paired with the Phenomenon Hook — answers the question the hook planted, at a higher level. Points forward to future modules. Read the hook, then the framework connection: if they don't feel like two ends of the same story, rewrite one or both. |
| **Glossary Entry** | Pre-formatted entry for the student's living glossary (see Section 5). Includes "I saw it when" field for student self-authoring. |

---

## SECTION 2.2 — Replace existing Section 2.2

### 2.2 Constraints

- **Time:** 25–45 minutes for the core experiment, depending on the module. Modules involving microscope work (B1, B5) or calorimetry (H1, C14) may run 35–45 minutes; simpler modules target 25–35 minutes. There is no separate Challenge Mode — if a concept is worth testing, it is built into the main experiment steps.
- **Terminology:** 3–6 new terms per module. Cognitive load must be managed, but the exact count varies with the domain (biology and health modules often require 6 terms to cover the observation space).
- **Materials cost:** Under $20 per module, with most modules under $10. Common household items preferred. Specialized equipment (e.g., Eisco calorimeter for H1, microscope for B1) is in the $5K equipment budget and reused across multiple modules.
- **Safety:** Every module includes a safety note where relevant. Adult supervision requirements are flagged explicitly.
- **Prerequisite transparency:** Every module lists which prior modules (if any) introduce terminology or concepts it builds on. No hidden dependencies.
- **Step design:** One physical action per numbered step. Do / observe / record are separated. Method sidebars come after the record prompt, never mid-action. See the Module Building Guide for the complete step design rules.

---

## SECTION 10 — Replace existing Section 10

## 10. Next Steps

### 10.1 Current State

Module C2 ("Can You Make a Battery from Fruit?") has been built, tested with the target learner, and revised to v2. The testing produced the Module Building Guide, which codifies all lessons learned and governs every future module build. Key changes from testing: steps were broken from 8 broad steps to 19 fine-grained steps (one action per step), Challenge Mode was eliminated, the phenomenon hook was rewritten with real-world relevance, and method sidebars were repositioned to follow the record prompt rather than interrupt action.

Three additional Tier 1 modules have been drafted using C2 v2 as the template and the Module Building Guide as the rules document:

- **H1 (Macronutrients and Energy):** 20 steps, 6 terms. Burn foods in an Eisco Labs Food Calorimeter Kit, calculate energy per gram, compare to nutrition labels. First Health Science module. Estimated time: 35–45 minutes.
- **P1 (Forces and Motion):** 14 steps, 5 terms. Simultaneous drop tests, phone accelerometer, F=ma. First Physics module.
- **B1 (Cells):** 18 steps, 6 terms. Cheek cell and onion cell microscopy, plant vs. animal comparison. First Biology module. Requires microscope time.

Each module has the full deliverable set: student guide, instructor guide, and lab notebook worksheet.

A Supabase curriculum database (`experiment-first-curriculum`, project `bjdkydgeanjbviksomkf`) is operational with all 80 modules seeded (id, title, domain, tier, sequence position, status), 22 terms catalogued for the 4 built modules, a prerequisite graph for all known dependencies, a 25-week suggested sequence, a build log with timestamped entries, and file URLs for all built module deliverables. RLS is enabled with public read access.

A curriculum dashboard (`dashboard.html`) is deployed to the GitHub Pages repo, pulling live data from Supabase. It has 5 tabs: Build Pipeline, Module Map (with file links), Terminology tracker, Sequence view, and Build Log.

### 10.2 Validation Criteria (Revised from Testing)

The proof of concept was validated with C2. Updated criteria based on what we learned:

1. A 16-year-old can complete the experiment in 25–45 minutes (depending on module complexity) without adult intervention beyond safety supervision.
2. The student can correctly use at least 3 of the introduced terms in a sentence immediately after completion.
3. The student can identify at least one variable they could change and predict what would happen.
4. The student completes the research report using the digital tool within 15–20 minutes.
5. The research report's Analysis section contains at least 2 scientific terms used correctly and references specific data from the Results.
6. The student does not stall on any individual step for more than 60 seconds (if they do, the step is too complex and must be broken up).

### 10.3 Immediate Next Steps

1. **Test H1, P1, and B1 with the target learner.** Same protocol as C2 testing: observe, don't instruct. Note stalls, skips, loss of interest. Revise each module using the Module Building Guide.
2. **Build C1 (Acids and Bases).** The remaining Tier 1 Chemistry entry point. This completes Chemistry's Tier 1 alongside C2.
3. **Build E1 (Minerals and Rocks).** The first Earth & Space module. This completes Tier 1 across all 5 domains.
4. **Make the report tool module-agnostic.** Currently hardcoded to C2 content. Needs to load module data from Supabase config so the AI feedback references the correct experiment, expected data, and key terms for each module.
5. **Update C2 files on the hub to v2.** The live site still serves v1 files.

### 10.4 Near-Term Build Plan

After testing and Tier 1 completion:

1. Build remaining Tier 1 modules: H2, H3, P2, P3, B2, B3, E2.
2. Build H8 (Screens and Attention) — highest-impact module for the ADHD learner.
3. Checkpoint 1 question bank (modules 1–12).
4. Save/load report progress (currently lost on page refresh).
5. Export finished reports as PDF.
6. Portfolio view — all completed reports.
7. Source AP released questions for first benchmark.
8. Continue building Tier 2 → Tier 3 modules following the 25-week sequence.
