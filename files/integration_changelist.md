# Health Science Strand — Integration Changelist

## What Happened

A new Health Science strand ("Self-Improvement Through Science") was designed as the 5th subject domain for the experiment-first curriculum. It adds 18 modules (13 core + 5 advanced) covering nutrition, exercise physiology, strength training, screen time and dopamine, sleep, skin health, stress, and a capstone personal protocol. The full spec is in `health_science_strand.md`.

The existing project files were NOT modified. This document lists every change needed to integrate the new strand into the existing project.

---

## Files That Need Updating

### 1. `curriculum_spec.md` — Major updates needed

**Section 1.1 (Core Principles):** Add a note that the curriculum now spans 5 domains (Physics, Chemistry, Biology, Earth & Space, Health Science) across a two-year timeline.

**Section 6 (Concept Map):** Add a new subsection 6.5 for Health Science Core (H1–H13) and a new subsection for Health Science Advanced (AH1–AH5). The module tables are fully defined in `health_science_strand.md` Sections 2.1 and 2.2.

**Section 6.10 (Curriculum Summary):** Update the totals table:
- Old: 62 modules, ~31 weeks, one academic year
- New: 80 modules, ~40 weeks, two academic years
- Add Health Science column: 13 core + 5 advanced = 18 modules

**Section 7 (Suggested Sequencing):** Extend the sample sequence to show Health Science modules entering the rotation around week 5–6. The full interleaving schedule is in `health_science_strand.md` Section 4.1.

**Section 8 (Research Reports):** No structural changes needed — Health Science modules use the same report system. But update the total count from "62 research reports" to "80 research reports" throughout.

**Section 8.8 (AI Feedback System):** Update the cost estimate from "~$2 for AI feedback across the full 62-module curriculum" to "~$2.60 for AI feedback across the full 80-module curriculum."

**New Section (after Section 9):** Add a section on the two-year timeline, explaining the Year 1 / Year 2 split. Year 1 = 61 core modules. Year 2 = 19 advanced modules at a slower pace.

### 2. `assessment_spec.md` — Moderate updates needed

**Section 2.2 (Checkpoints):** Update the checkpoint schedule to include Health Science questions:
- CP2 (after ~24 modules): add H1–H4
- CP3 (after ~36 modules): add H5–H9
- CP4 (cumulative): add all H1–H13
- CP5 (advanced): add AH1–AH5

**Section 2.3 (AP Benchmarks):** Add a note that Health Science content overlaps with AP Biology (Units 2, 3, and 6) and questions will be incorporated into the Biology benchmark sections.

**Section 5 (Portfolio Defense):** Add a note that AH5 (Building a Personal Protocol) is an excellent portfolio defense candidate — the student presents personal data, their self-designed protocol, and measured results.

**Section 6.1 (What It Tracks):** Update vocabulary accumulation estimate from "185–310 scientific terms" to "255–390 scientific terms" (adding ~70–80 from Health Science).

### 3. `curriculum_equipment_budget.md` — Minor additions needed

**Add a new section: Health Science Equipment**

| Item | Est. Cost | Modules Used |
|---|---|---|
| Blood glucose monitor (glucometer) | $15–25 | H4, AH1, AH4 |
| Glucose test strips (50-pack) | $15 | H4, AH1, AH4 |
| DCPIP solution (100mL) | $8 | H5 |
| Oil-blotting papers (200 sheets) | $5 | H10, AH4 |
| Hand dynamometer (if not already purchased) | $25 | H7, AH3 |
| Galvanic skin response sensor (optional) | $20 | H11 |
| **Total** | **$68–98** | |

Update the budget summary: $3,228 spent → $3,296–3,326 spent. Remaining: $1,674–1,704.

### 4. `experiment_guide.md` — Major addition needed

Add a new section: "HEALTH SCIENCE — CORE (H1–H13)" and "HEALTH SCIENCE — ADVANCED (AH1–AH5)" with experiment descriptions for all 18 modules. The full experiment details are in `health_science_strand.md` Section 6 (core) and Section 7 (advanced).

### 5. `experiment_upgrade_notes.md` — Minor addition needed

Add a Health Science section. Most H modules use existing equipment or new budget items listed above. Note which modules benefit from upgraded equipment already in the budget (e.g., heart rate monitor from B7 used in H6/H7/H11, precision scale from C11 used in H1, pH meter from C1 used in AH2).

### 6. `index.html` (Project Hub) — Moderate updates needed

**Header subtitle:** Update "v0.1" to "v0.2" to reflect the Health Science addition.

**Project Status section:**
- Move "Test C2 with student" to Completed (or keep in Next Up depending on current status)
- Add to Completed: "Health Science strand specification (v0.2) — 18 modules, self-improvement through science"
- Add to Next Up: "Integrate Health Science strand into curriculum spec and assessment spec"
- Add to Next Up: "Build H1 (Macronutrients and Energy) as first Health Science proof-of-concept"
- Add to Next Up: "Build H3 (Protein and Diet Planning) and H7 (Strength Training) — key novel modules"
- Add to Future: "Build H8 (Screens and Attention) module — highest-impact for ADHD learner"
- Update total module count references from 62 to 80 wherever they appear

**Documents section:** Add a new file card:
```
Health Science Strand Specification
Self-improvement through science: nutrition, exercise, sleep, screens, skin, stress — 18 modules
Tag: Spec
```

**Tools section:** No changes needed.

### 7. `README.md` — Minor updates needed

Update the Curriculum Overview:
- Old: Core: 48 modules (~24 weeks) across 4 NGSS domains
- New: Core: 61 modules (~31 weeks) across 5 domains (4 NGSS + Health Science)
- Old: Advanced: 14 modules (~7 weeks)
- New: Advanced: 19 modules (~10 weeks)
- Old: Total: 62 modules, ~31 weeks, ~2 hours/week
- New: Total: 80 modules, ~40 weeks across 2 years, ~2 hours/week
- Add Health Science strand to the description

---

## Files That Do NOT Need Updating

- `module_c2.md` — No changes. C2 is unchanged.
- `c2_instructor_guide.md` — No changes.
- `c2_lab_notebook.md` — No changes.
- `research_report_tool_c2.jsx` — No changes. The tool will eventually need to be made module-agnostic, but that's a separate task.
- `c2_build_summary.md` — Historical document. No changes needed.

---

## New File

- `health_science_strand.md` — The complete Health Science strand specification. This is the primary new deliverable. Add to `files/` directory and to the project hub.

---

## Integration Order

1. Add `health_science_strand.md` to `files/` directory
2. Update `curriculum_spec.md` (the biggest change — new sections, updated totals, updated sequencing)
3. Update `assessment_spec.md` (checkpoint schedule, portfolio defense, vocabulary count)
4. Update `curriculum_equipment_budget.md` (new equipment section)
5. Update `experiment_guide.md` (18 new experiment descriptions)
6. Update `experiment_upgrade_notes.md` (Health Science upgrade notes)
7. Update `index.html` (project hub — status, documents, version)
8. Update `README.md` (overview numbers)
9. Deploy updated project hub to GitHub Pages
