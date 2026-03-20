# SESSION HANDOFF: Update Hub Page + Specs

## Context

I'm building an experiment-first high school science curriculum. The project hub is at:
https://archongraceland.github.io/experiment-first-curriculum/

The curriculum database is on Supabase (project ID: `bjdkydgeanjbviksomkf`). A live dashboard pulling from this database is deployed at:
https://archongraceland.github.io/experiment-first-curriculum/dashboard.html

## What's been done since the specs were last updated

1. **Module C2 (fruit battery)** was built, tested with the student, and revised to v2. The testing produced a `module_building_guide.md` (attached) that codifies all lessons learned: one action per step, real-world hooks paired with framework connections, one-sentence method sidebars after record prompts, no challenge mode, etc.

2. **Three new Tier 1 modules were built** using C2 v2 as template:
   - **H1** (Macronutrients and Energy) — burn foods in an Eisco calorimeter, calculate energy per gram, compare to nutrition labels. 20 steps, 6 terms. Uses Eisco Labs Food Calorimeter Kit (~$15-25 on Amazon).
   - **P1** (Forces and Motion) — simultaneous drop tests, phone accelerometer, F=ma. 14 steps, 5 terms.
   - **B1** (Cells) — cheek cell + onion cell microscopy, plant vs animal comparison. 18 steps, 6 terms.
   
   Each module has the full deliverable set: student guide, instructor guide, lab notebook worksheet. All follow the module building guide rules exactly.

3. **A Supabase database** (`experiment-first-curriculum`, project `bjdkydgeanjbviksomkf`) was created with:
   - All 80 modules seeded (id, title, domain, tier, sequence position, status)
   - 22 terms catalogued for the 4 built modules (with definitions, observation anchors, connected_to arrays)
   - Prerequisite graph for all known dependencies
   - 25-week suggested sequence
   - Build log with timestamped entries
   - File URLs for all built module deliverables
   - RLS enabled with public read access

4. **A curriculum dashboard** (`dashboard.html`) was built and deployed to the GitHub Pages repo. It has 5 tabs: Build Pipeline, Module Map (with file links), Terminology tracker, Sequence view, Build Log.

## What needs updating now

### 1. The index page (`index.html`)

The hub page is out of date. It needs:

**Completed section — add:**
- C2 tested with student, revised to v2 (19 steps, no challenge mode)
- Module building guide created from testing lessons learned
- H1 (Macronutrients and Energy) — first Health Science module, drafted
- P1 (Forces and Motion) — first Physics module, drafted  
- B1 (Cells) — first Biology module, drafted
- Supabase curriculum database — 80 modules seeded, terminology tracking, build log
- Curriculum dashboard — live, pulling from Supabase

**Next Up section — replace current items with:**
- Test H1, P1, B1 with student — observe, note stalls, revise using module building guide
- Build C1 (Acids and Bases) — the remaining Tier 1 Chemistry entry point
- Build E1 (Minerals and Rocks) — first Earth & Space module, completes Tier 1 across all 5 domains
- Make report tool module-agnostic — load module data from Supabase config instead of hardcoded C2 content
- Update C2 on the hub to the v2 version (current site still has v1)

**Future section — update to:**
- Build remaining Tier 1 modules (H2, H3, P2, P3, B2, B3, E2)
- Build H8 (Screens and Attention) — highest-impact module for ADHD learner
- Checkpoint 1 question bank (modules 1–12)
- Save/load report progress
- Export finished reports as PDF
- Portfolio view — all completed reports
- Source AP released questions for first benchmark

**Documents section — add new modules:**
- Module H1 section (student guide, instructor guide, lab notebook)
- Module P1 section (student guide, instructor guide, lab notebook)
- Module B1 section (student guide, instructor guide, lab notebook)
- Module Building Guide (the template rules document)
- Update C2 section to note it's v1 on the site, v2 is the current version

**Tools section — add:**
- Curriculum Dashboard link (dashboard.html)
- Supabase project reference

### 2. The curriculum spec (`curriculum_spec.md`)

Section 10 (Next Steps) is completely out of date. It still says "Build Module C2 as the first complete module." Update to reflect:

- C2 is built, tested, and revised
- The module building guide exists and governs all new module builds  
- H1, P1, B1 are drafted
- The Supabase database and dashboard are operational
- Next priority is testing the three new modules and building remaining Tier 1 entries

Section 2.1 (Module Template) still includes "Challenge Mode" as a component. It should be removed per the module building guide — Challenge Mode was eliminated after C2 testing. The method sidebar description should also be updated to reflect "one sentence, after the record prompt, visually distinct" rather than "runs parallel to the experiment."

Section 2.2 (Constraints) may need minor updates based on what we learned from actual module builds (H1 runs 35-45 min, not 25-40; B1 needs microscope time).

### 3. The health science strand spec (`health_science_strand.md`)

Section 6 (Experiment Details > H1) describes the experiment using a "soda can" calorimeter. This should be updated to reference the Eisco Labs Food Calorimeter Kit, matching the actual H1 student guide.

Section 13 (Next Steps) is out of date — H1 is now built, not "next."

### 4. The equipment budget (`curriculum_equipment_budget.md`)

If it doesn't already include the Eisco Labs Food Calorimeter Kit (~$15-25), add it. It replaces the DIY soda-can setup for H1 and C14.

## Files attached

1. `module_building_guide.md` — the template rules every new module must follow
2. `c2_student_guide_v2.md` — the gold-standard revised C2 module
3. `index.html` — the current hub page source (paste this into the chat if not attached)

## Instructions

Read the current hub page at https://archongraceland.github.io/experiment-first-curriculum/ and all four spec documents linked there. Then produce:

1. Updated `index.html` with all changes above
2. Updated `curriculum_spec.md` sections 2.1, 2.2, and 10
3. Updated `health_science_strand.md` sections 6 (H1 entry) and 13
4. A note on any equipment budget changes needed

Maintain the existing design system and voice of each document. The hub page should keep its current visual design — just update the content. The specs should be precise revisions, not rewrites.
