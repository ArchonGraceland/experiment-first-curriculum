# ASSESSMENT SYSTEM DESIGN SPECIFICATION

## Experiment-First Science Curriculum

**Companion to:** Curriculum Design Specification v0.1
**Benchmark:** AP Physics 1, AP Chemistry, AP Biology, AP Environmental Science
**Version:** 0.1 — Draft for Refinement
**Date:** March 2026

---

## 1. Assessment Philosophy

This assessment system measures whether the experiment-first approach produces genuine scientific understanding comparable to or exceeding traditional instruction. It is not a grading system. There are no grades, no pass/fail, no GPA impact. It is a diagnostic tool that tells the student and instructor what stuck, what didn't, and what needs reinforcement.

### 1.1 Core Principles

- **Never call them tests.** The word "test" triggers anxiety and resistance, especially for ADHD learners. Use "checkpoint" for periodic assessments and "benchmark" for AP-aligned practice exams.
- **Measure understanding, not endurance.** Checkpoints are short (15–20 questions, 20–30 minutes). AP-aligned benchmarks are administered in sections across multiple days, never as a 3-hour marathon.
- **Diagnostic, not punitive.** Every missed question maps back to a specific module. The output is a gap map, not a score. The student sees: "I need to revisit oxidation-reduction from Module C2" — not "I got 68%."
- **AP-aligned for external benchmarking.** Question formats, content scope, and difficulty levels mirror AP exams so the student's performance can be compared against national norms. This gives the curriculum external validity.
- **Integrated with the curriculum, not bolted on.** The research reports (Curriculum Spec Section 8) are the primary continuous assessment. Checkpoints and benchmarks are periodic external checks, not the main feedback mechanism.

---

## 2. Three Layers of Assessment

The assessment system operates at three levels, each measuring different things at different frequencies.

| Layer | What It Measures | Frequency | Format | Duration |
|---|---|---|---|---|
| **1: Research Reports** | Vocabulary precision, evidence-based reasoning, investigative thinking, scientific writing | Every module (62 total) | Written report using digital tool | 15–20 min per module |
| **2: Concept Checkpoints** | Concept retention, term recall, ability to apply knowledge to new scenarios | Every ~12 modules (5 checkpoints across the core curriculum) | 15–20 questions: multiple choice + short free response | 20–30 min |
| **3: AP-Aligned Benchmarks** | Comprehensive understanding comparable to AP exam performance | End of core curriculum; end of advanced curriculum | Full AP-style practice exam (MC + free response) | Split across 2–3 sessions |

### 2.1 Layer 1: Research Reports (Continuous)

This layer is already defined in the Curriculum Spec (Section 8). The research reports serve as the primary continuous assessment.

**The AI feedback system handles draft-level review.** The digital report tool (Curriculum Spec Section 8.8) provides real-time feedback as the student writes — flagging colloquial language where precise terms exist, prompting for missing data citations, and asking targeted questions to strengthen reasoning. This means the instructor does not need to review every draft of every section. The AI catches vocabulary gaps, unsupported claims, and structural issues before the instructor ever sees the report.

**The instructor focuses on portfolio-level review.** With draft-level feedback handled by the AI, the instructor's role shifts to higher-order assessment: reviewing completed reports for overall quality, tracking growth patterns across multiple modules, and engaging in scientific conversation that pushes the student's thinking beyond what the AI can address. Specifically, the instructor:

- Reviews completed reports against three dimensions: vocabulary precision, evidence-based reasoning, and investigative thinking.
- Looks for growth trends across reports (Are analysis sections getting longer? Is vocabulary becoming more natural? Are follow-up questions becoming more sophisticated?).
- Identifies persistent gaps that the AI feedback hasn't resolved — these may require going back to the bench for re-experimentation rather than more writing.
- Engages in the kind of open-ended scientific dialogue ("How does this connect to what you saw in Module C1?") that AI feedback deliberately avoids.

**Key metrics extracted from each report:**

- Number of module terms used correctly out of total introduced
- Whether the Analysis section cites specific data from Results
- Whether the Hypothesis includes reasoning (not just a prediction)
- Quality of the Next Investigation question (testable? specific? follows from findings?)

These metrics accumulate in a progress tracker (see Section 6) and provide a continuous picture of the student's scientific development without any additional testing burden. In practice, the AI feedback system will resolve many vocabulary and evidence gaps during the writing process itself, meaning the reports the instructor reviews should already reflect one round of self-correction — making the instructor's review faster, more focused, and higher-value.

### 2.2 Layer 2: Concept Checkpoints

Checkpoints are short, focused assessments administered after every ~12 modules. They serve as an early-warning system: if the student is retaining concepts from the experiments, the checkpoint confirms it. If gaps are forming, the checkpoint catches them before they compound.

**Checkpoint Schedule**

| Checkpoint | After Modules | Approximate Week | Subjects Covered |
|---|---|---|---|
| CP1 | 1–12 | Week 6 | Foundational physics (P1–P4), foundational chemistry (C1–C3), foundational biology (B1–B3), intro earth science (E1–E2) |
| CP2 | 13–24 | Week 12 | Mid-core physics (P5–P9), mid-core chemistry (C4–C8), mid-core biology (B4–B7), mid earth science (E3–E5) |
| CP3 | 25–36 | Week 18 | Advanced core physics (P10–P14), advanced core chemistry (C9–C14), advanced core biology (B8–B12), late earth science (E6–E8) |
| CP4 | 37–48 | Week 24 | Cumulative core review — all 48 core modules; emphasis on cross-disciplinary connections |
| CP5 | 49–62 | Week 31 | Advanced modules (AP, AC, AB, AE series); integration of advanced concepts with core foundations |

**Checkpoint Structure**

Each checkpoint contains 15–20 questions in three formats:

| Format | Count | Description | AP Alignment |
|---|---|---|---|
| **Multiple Choice** | 8–10 | Four options, one correct. Tests recall and recognition of concepts and vocabulary. Each question tagged to a specific module. | Mirrors AP MC format: stem + 4 options, often with a data table or diagram |
| **Short Free Response** | 4–6 | 2–4 sentence answer. Tests ability to explain a concept, interpret data, or predict an outcome. Must use precise scientific terminology. | Mirrors AP short FRQ: brief, targeted, vocabulary-heavy |
| **Scenario Application** | 2–3 | A novel scenario the student has not seen. Apply concepts from multiple modules to analyze or predict. No single "right answer" — quality of reasoning is assessed. | Mirrors AP experimental design and analysis questions |

**Checkpoint Administration**

- **Untimed or generously timed.** The goal is to measure knowledge, not processing speed. Suggest 20–30 minutes, but the student can take longer without penalty.
- **Open-glossary.** The student may use their living glossary. This tests whether they can locate and apply terms, not whether they memorized a definition in isolation. This mirrors real scientific practice.
- **Immediate review.** After completing the checkpoint, the student reviews every question — not just the ones they missed. The review conversation is where the deepest learning happens.
- **No scores displayed as percentages.** Results are presented as a concept map showing green (solid), yellow (partial), and red (gap) for each module's concepts. The student sees a visual, not a number.

### 2.3 Layer 3: AP-Aligned Benchmarks

Benchmarks are comprehensive assessments administered twice: once after the core curriculum (48 modules) and once after the advanced curriculum (62 modules). They use actual released AP exam questions or close approximations and are the primary tool for comparing the student's performance against national norms.

**AP Exam Alignment Map**

| AP Exam | Our Modules Covered | Benchmark Timing | Expected Coverage |
|---|---|---|---|
| AP Physics 1 | P1–P14, AP1–AP3 | Post-core (P1–P14); post-advanced (+ AP1–AP3) | ~85% of AP Physics 1 content; ~40% of AP Physics 2 |
| AP Chemistry | C1–C14, AC1–AC4 | Post-core (C1–C14); post-advanced (+ AC1–AC4) | ~80% of AP Chemistry content |
| AP Biology | B1–B12, AB1–AB3 | Post-core (B1–B12); post-advanced (+ AB1–AB3) | ~75% of AP Biology content |
| AP Environmental Science | E1–E8, AE1–AE4, B9–B11 | Post-core (E1–E8 + B9–B11); post-advanced (+ AE1–AE4) | ~70% of AP Environmental Science content |

**Benchmark Administration**

- **Split across multiple sessions.** Never administer a full AP-length exam in one sitting. Multiple choice in one session (45–60 min), free response across one or two more sessions (30–45 min each). Schedule on separate days.
- **Closed-glossary for the MC section.** This tests genuine retention without aids and mirrors actual AP conditions.
- **Open-glossary for the FRQ section.** Free response rewards depth of reasoning, not memorization. Allowing the glossary here tests application, not recall.
- **Scored against AP rubrics.** Use College Board's published scoring guidelines for released questions. This gives a direct comparison: "This response would earn 3/4 on the AP rubric."
- **Translated to an approximate AP score.** Using published AP score distributions and cut points, translate the raw score to an approximate 1–5 AP score. This is the key external benchmark: a 3+ means the student is performing at the level of students who pass the actual AP exam.

---

## 3. Question Design Standards

All checkpoint and benchmark questions follow these design standards to ensure they measure understanding from the experiment-first approach, not just textbook recall.

### 3.1 Question Tagging

Every question is tagged with:

- **Module ID:** Which module(s) the question tests (e.g., C2, P4+P5)
- **AP Standard:** The specific AP learning objective it aligns with (e.g., AP Chemistry LO 3.1)
- **Concept:** The core concept being tested (e.g., oxidation, conservation of momentum)
- **Vocabulary:** Which specific terms the question requires the student to know
- **Bloom's level:** Remember, Understand, Apply, Analyze, Evaluate, or Create

This tagging enables precise gap analysis: when a student misses a question, the system traces it back to a specific module, concept, and vocabulary term.

### 3.2 Question Type Guidelines

**Multiple Choice**

- Stem should describe a scenario or present data, not just ask for a definition.
- All four options should be plausible. Wrong answers should reflect common misconceptions, not obvious nonsense.
- Prefer questions that reference experiments: "In the fruit battery experiment, if you replaced the copper electrode with a second zinc electrode, what would happen to the voltage?"
- At least 30% of MC questions should include a data table, graph, or diagram.

**Short Free Response**

- Require the student to use at least 2 specific scientific terms in their answer.
- Ask "why" or "explain the mechanism," not "what." "What is oxidation" tests recall. "Why did the zinc electrode lose mass in your experiment" tests understanding.
- Scoring rubric: 1 point for correct concept, 1 point for correct use of terminology, 1 point for connecting to experimental evidence.

**Scenario Application**

- Present a situation the student has never encountered but can analyze with concepts they've learned.
- Require integration of concepts from 2+ modules (e.g., combining electrochemistry and reaction rates).
- No single correct answer. Assess quality of reasoning: Is the hypothesis testable? Is the proposed experimental design valid? Are the predicted results consistent with the concepts?
- Scoring rubric: evaluated on reasoning quality, not on reaching a specific answer.

---

## 4. Gap Mapping and Remediation

When a student misses questions, the system doesn't just record a score — it identifies exactly which concepts need reinforcement and prescribes specific actions.

### 4.1 The Gap Map

After each checkpoint, results are presented as a visual concept map organized by module:

| Status | Criteria | Action |
|---|---|---|
| **Solid (green)** | All questions for this module's concepts answered correctly; terminology used precisely in free response | No action needed. Move forward. |
| **Partial (yellow)** | Some questions correct, some missed; terminology used but imprecisely or incompletely | Review the module's glossary entries. Re-read the student's own research report from that module. Discuss the missed concept with the instructor. |
| **Gap (red)** | Most or all questions for this module's concepts missed; terminology absent or incorrect | Revisit the experiment. Not re-read about it — actually redo a simplified version. The experiment is the anchor; without the physical experience, the concept won't stick. |

### 4.2 Remediation Principles

- **Re-experiment, don't re-explain.** If a concept didn't stick, the answer is not more reading — it's going back to the bench. Run a shortened version of the original experiment or a variation that targets the specific gap.
- **Connect to what they do know.** If oxidation is a gap but the student understands the fruit battery experiment, the remediation conversation starts with: "Remember how the zinc got pitted? Let's talk about what was happening to the zinc atoms."
- **Re-check within 2 weeks.** After remediation, include 2–3 questions on the gap concept in the next checkpoint. If it's now green, the gap is closed. If it's still yellow or red, try a different experimental approach.

---

## 5. Portfolio Defense

At the end of the curriculum, the student presents a portfolio defense: a verbal presentation of their best scientific work. This is the capstone assessment and the most authentic measure of deep understanding.

### 5.1 Structure

1. The student selects 3–5 of their best research reports from the full 62-module portfolio.
2. For each selected report, the student prepares a 5–7 minute verbal presentation covering: the research question, what they found, what it means, and what they would investigate next.
3. The instructor (or a small audience — family members, a tutor, a peer) asks follow-up questions. These questions probe depth: "What would happen if you changed X?" "How does this connect to [concept from a different module]?"
4. The student responds in real time, demonstrating the ability to think scientifically on their feet, not just in writing.

### 5.2 Evaluation Criteria

| Dimension | Strong Performance | Developing Performance |
|---|---|---|
| **Scientific vocabulary** | Uses precise terms naturally throughout the presentation. Defines terms when asked without hesitation. | Uses some correct terms but also falls back on colloquial language. Can define terms when prompted but doesn't use them spontaneously. |
| **Experimental understanding** | Can explain why they made specific experimental choices. Discusses controls and variables without prompting. | Describes what they did but struggles to explain why. Needs prompting to discuss controls. |
| **Data interpretation** | References specific data from their results. Connects data to conclusions logically. | Makes general claims about results without citing specific measurements. Conclusions are vague. |
| **Cross-module connections** | Spontaneously connects the presented experiment to concepts from other modules. | Discusses the experiment in isolation. Doesn't see connections to other work without prompting. |
| **Response to questions** | Engages with novel questions. Proposes testable follow-up ideas. Comfortable saying "I don't know, but I would test it by..." | Gives short answers to follow-up questions. Struggles with novel scenarios. Uncomfortable with uncertainty. |

### 5.3 Why Portfolio Defense Matters

Multiple choice and written responses measure recognition and recall. The portfolio defense measures whether the student can think scientifically in real time — explain, predict, and reason under open-ended questioning. This is the highest level of assessment and the most authentic measure of whether the experiment-first approach produced a scientifically literate person.

For an ADHD learner, this format is often more effective than written exams: the student is talking about their own work, the conversation is dynamic, and there's no sustained silent writing required. Many ADHD learners demonstrate understanding verbally that they struggle to express in writing under timed conditions.

---

## 6. Progress Tracking System

A digital tracking tool aggregates data from all three assessment layers into a single view of the student's scientific development over time.

### 6.1 What It Tracks

- **Research report metrics:** Terms used correctly per module, evidence quality score, investigation quality score — plotted over time to show growth.
- **Checkpoint results:** Gap map for each checkpoint, showing which modules are green/yellow/red. Track how gaps close (or persist) over time.
- **AP benchmark scores:** Approximate AP score (1–5) for each subject. Compare post-core vs. post-advanced to measure growth.
- **Vocabulary accumulation:** Total terms introduced vs. total terms used correctly in reports and checkpoints. This is the simplest metric and the most motivating for the student to see climb over time.

### 6.2 Visualization

The student sees a dashboard with four views:

- **The Concept Map:** A visual grid of all 62 modules color-coded green/yellow/red based on the latest checkpoint data. This is the primary "where am I" view.
- **The Growth Curve:** A line graph showing vocabulary mastery, report quality scores, and checkpoint performance over time. The upward trend is the motivator.
- **The AP Scorecard:** Four gauges (Physics, Chemistry, Biology, Environmental Science) showing the current estimated AP score. The target line is a 3 (qualifying score).
- **The Portfolio:** A chronological list of all research reports with quality ratings. The student can see their first report next to their latest and observe their own growth.

### 6.3 Privacy and Tone

The tracking system is visible only to the student and the instructor. It is never shared without the student's consent. The language throughout is encouraging and growth-oriented: "15 new terms mastered this month" rather than "12 terms missed." The system emphasizes trajectory (are you improving?) over position (what's your score?).

---

## 7. Next Steps

1. Build the question bank for Checkpoint 1 (modules 1–12): 15–20 questions tagged to modules, AP standards, concepts, vocabulary, and Bloom's level.
2. Source released AP questions for the first benchmark: identify 40–60 questions from AP Physics 1, AP Chemistry, AP Biology, and AP Environmental Science that align with our core modules.
3. Build the progress tracking dashboard as an interactive tool.
4. Design the gap map visualization and remediation workflow.
5. Test Checkpoint 1 alongside the proof-of-concept module (C2) to validate that the question style and difficulty are appropriate.
