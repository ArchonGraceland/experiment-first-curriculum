# C2 Proof of Concept — Build Summary

## What Was Built

This document summarizes everything built and decided in the C2 proof-of-concept chat. Upload this to the next chat alongside the original spec documents so nothing needs to be re-derived.

### Deliverables Completed

1. **Module C2 document** (needs rebuild as markdown) — Complete module with all 9 spec components plus lab notebook prompt and Phase 1 guided research report
2. **Instructor guide** (needs rebuild as markdown) — Setup, timing, safety, facilitation guidance, troubleshooting, report review rubric
3. **Lab notebook template** (needs rebuild as markdown) — Printable worksheet with prediction, data table, sketch area, surprise prompt, terms table, challenge mode section
4. **Research report tool** (deployed and working) — React/Next.js app at https://research-report-tool.vercel.app/ with AI feedback layer. GitHub repo: https://github.com/ArchonGraceland/research-report-tool

---

## Module C2 Content

### Title
Can You Make a Battery from Fruit?

### Module Info
- Chemistry, Tier 1, no prerequisites
- Time: 30–40 minutes experiment, 15–20 minutes report
- 5 key terms: voltage, oxidation, reduction, electrolyte, electrode
- Safety: Low risk (goggles required as habit-building, don't eat fruit afterward, wash hands)

### Phenomenon Hook
"A lemon, a nail, a strip of copper wire, and a voltmeter. The needle moves. There is no battery in this circuit — so where is the electricity coming from?"

### Materials (Upgraded $5K Budget)
- 2 digital multimeters (auto-ranging)
- Zinc strips or galvanized nails — 4 pieces, ~5 cm each
- Copper strips or heavy copper wire — 4 pieces, ~5 cm each
- 6 alligator clip leads
- Fruits: 1 lemon, 1 potato, 1 apple, 1 orange
- 1 red LED (low-current, ~1.8V forward voltage)
- Lab notebook and pen
- Safety goggles
- Paper towels, tray/newspaper
- Optional: sandpaper, ruler, timer

### Experiment Steps (8 steps with method sidebar)

**Step 1: Prepare the lemon cell**
- Roll lemon, insert zinc and copper strips ~3cm apart, halfway in, not touching
- Sidebar: Controlled variables established

**Step 2: Measure the voltage**
- Multimeter on DC voltage, red to copper, black to zinc
- Introduces term: VOLTAGE — at the moment the reading appears
- Sidebar: Quantitative observation

**Step 3: Examine the zinc strip**
- Pull out zinc, observe pitting on submerged portion vs clean exposed end
- Introduces term: OXIDATION — zinc losing electrons, entering solution as Zn²⁺
- Introduces term: ELECTRODE — zinc is the anode
- Sidebar: Connecting visible observation to invisible mechanism

**Step 4: Think about the copper**
- Electrons flow through external circuit to copper; H⁺ ions gain electrons → H₂ gas
- Introduces term: REDUCTION — gain of electrons
- Look for tiny bubbles on copper
- Sidebar: Two observations snap into one mechanism (redox reaction)

**Step 5: Identify the electrolyte**
- Citric acid solution contains ions, carries charge between electrodes internally
- Introduces term: ELECTROLYTE
- Quick test: remove strips from fruit, press together — voltage drops to ~0
- Sidebar: Negative control

**Step 6: Test different fruits**
- Repeat Steps 1–2 with potato, apple, orange
- Fresh/sanded electrodes, same depth, same spacing
- Create data table: fruit, voltage, electrode observations
- Sidebar: Comparative experiment, independent/dependent variables

**Step 7: Wire two lemon cells in series, light the LED**
- Connect copper of Cell 1 to zinc of Cell 2
- Remaining zinc to short LED leg, remaining copper to long LED leg
- Measure combined voltage with second multimeter
- Sidebar: Engineering — using science to solve a practical problem

**Step 8: Measure the current**
- Second multimeter on DC mA, insert in series
- Typical: 0.2–1.5 mA — explains dim LED, high internal resistance
- Sidebar: Voltage vs current as two different properties

### Key Terminology Table

| Term | Definition | Observation Anchor |
|------|-----------|-------------------|
| Voltage | Electrical potential difference between two points, measured in volts | Multimeter showed ~0.9V between zinc and copper in lemon (Step 2) |
| Oxidation | Loss of electrons by an atom/ion/molecule | Zinc strip showed pitting where submerged (Step 3) |
| Reduction | Gain of electrons by an atom/ion/molecule | Tiny bubbles on copper strip inside lemon (Step 4) |
| Electrolyte | Substance that produces ions when dissolved, allowing solution to conduct electricity | Voltage dropped to ~0 when strips touched without fruit (Step 5) |
| Electrode | Conductor through which electricity enters/leaves a solution; anode = oxidation site, cathode = reduction site | Zinc (anode) and copper (cathode) strips; no voltage without both (Steps 2–4) |

### Challenge Mode: The Electrode Swap Challenge
- Predict first: zinc + iron vs zinc + copper? Two same metals?
- Test: zinc + iron, zinc + zinc, copper + copper, any other metals available
- Key insight: same-metal cells produce ~0V; voltage depends on reactivity difference between metals (activity series)
- "You just discovered the principle behind every battery ever made"

### Framework Connection
The fruit battery is a galvanic cell — the principle behind all commercial batteries. Voltage depends on standard electrode potentials. Module AC2 reverses the process (electrolytic cell / electroplating).

### Glossary Entries (5)
Each entry has: term, definition, "First encountered: C2", "I saw it when: [student writes]", "Connected to: [cross-references to other modules]"
- Voltage → connects to Current (P4), Resistance (P4), Power (P4)
- Oxidation → connects to Reduction (C2), Activity series (C5), Corrosion (AC4)
- Reduction → connects to Oxidation (C2), Electroplating (AC2)
- Electrolyte → connects to Ions (C6), Conductivity (C6), pH (C1), Acids (C1)
- Electrode → connects to Anode/Cathode (AC2), Circuit (P4), Electroplating (AC2)

---

## Instructor Guide Content

### Setup Checklist
- Lay out all materials visibly before student arrives
- Test one lemon cell yourself (should read 0.7–1.0V; sand zinc if zero)
- Pre-set both multimeters (one DC voltage, one DC mA)
- Roll all citrus fruits firmly to break internal membranes
- Have sandpaper accessible for electrode cleaning between fruits
- Newspaper/tray under workspace
- Lab notebook and pen at workspace, not across the room

### Timing Guide (minute by minute)
- 0–2 min: Read hook, write prediction
- 2–5: Set up lemon cell
- 5–8: Measure voltage
- 8–12: Examine zinc, learn oxidation
- 12–15: Learn reduction, examine copper
- 15–18: Electrolyte test, negative control (the "aha" moment)
- 18–26: Test 4 fruits, record data (longest stretch — redirect with "which fruit will beat the lemon?")
- 26–32: Wire series circuit, light LED (strong motivator)
- 32–35: Measure current
- 35–40: Challenge Mode (optional but encouraged)
- 40–60: Research report

### Golden Rules for Facilitation
- Never explain before they observe
- Ask, don't tell (replace statements with questions)
- Let them struggle 30 seconds before helping
- Celebrate the data, not the "right answer"
- Never touch their notebook

### Common Mistakes & Troubleshooting (7 issues)
- Multimeter reads 0V: probes reversed, wrong setting, strips touching, corroded electrodes
- Very low voltage (<0.5V): fruit not rolled, electrodes too close, small fruit
- LED doesn't light: LED polarity, loose connections, parallel instead of series
- Confuses oxidation/reduction: anchor to physical — "which electrode dissolved?"
- Skips notebook entries: build micro-pauses ("jot down what you saw before we move on")
- Rushes without observing: redirect to specific observation
- Same-metal cell reads small non-zero: great teaching moment about surface oxides

### Report Review Rubric (3 dimensions)
- Vocabulary Precision: uses 4–5 terms correctly vs colloquial substitutions
- Evidence-Based Reasoning: cites specific data vs unsupported claims
- Investigative Thinking: specific testable next experiment vs vague "try more fruits"

### Content Knowledge Reference
- Standard electrode potentials: Zn = −0.76V, Cu = +0.34V, theoretical = 1.10V, measured = 0.7–1.0V due to weak electrolyte and high internal resistance
- Same-metal cell ~0V because no reactivity difference
- AP Chemistry alignment: Unit 4 (Chemical Reactions), Unit 9 (Applications of Thermodynamics), LO ENE-6.A, TRA-2.A

---

## Lab Notebook Template Content

### Fields
- Date, Name, Module (C2)
- My Prediction (before experiment): which fruit, why
- Data Table: Fruit | Voltage (V) | Zinc Surface | Copper Surface | Other Notes — rows for lemon, potato, apple, orange
- Additional Measurements: series voltage, circuit current (mA), LED brightness, voltage with strips touching (no fruit)
- Circuit Sketch: blank box with label instructions (zinc/anode, copper/cathode, electrolyte, LED, clips, multimeter)
- What Surprised Me: open response
- New Terms I Learned: table with Term | What I Saw (in my own words) — rows for all 5 terms
- Challenge Mode (if attempted): prediction, table with Electrode Combination | Voltage | Prediction Correct? — rows for zinc+iron, zinc+zinc, copper+copper, blank

---

## Research Report Tool — Design Decisions

### Cross-Domain Examples (Anti Copy-Paste)
Examples in each section come from OTHER modules, not C2:
- Research Question example: from P1 (Forces and Motion) — falling objects
- Hypothesis example: from B3 (Photosynthesis) — light intensity and oxygen
- Experimental Design example: from P1 — controlled variables for falling objects
- Results example: from B3 — bubble count data at different lux levels
- Analysis example: from B3 — photosynthesis plateau
- Next Investigation example: from P1 — surface texture and drag

Student can see the PATTERN of good scientific writing but can't paste anything into their fruit battery report.

### Examples Live Inside the Guidance Panel
Single toggle: "Show guidance & examples." Example appears inside the amber guidance box under a labeled header ("Example from P1 — Forces and Motion"). Framed as instructional context, not a model answer.

### AI Feedback Design Principles
1. **Questions only, never answers** — the AI asks one targeted question, never tells the student what to write
2. **No scores** — readiness signal only (green = solid, orange = has gaps, navy = unchecked)
3. **One question at a time** — never multiple questions, never open-ended
4. **Optional to act on** — "Revise above if you'd like, or move on — this is your report"
5. **Resource-aware hints** — AI returns a `hint` field: "notebook" (need data), "terminology" (need precise term), or "none"
6. **Auto-opens reference panel** when hint is "terminology"
7. **Feedback stays visible while revising** — dims to 55% opacity when text changes significantly, shows "You've revised — tap Check my work again when ready" — never disappears
8. **First-draft snapshots** — automatically saved when student first writes meaningful content; side-by-side comparison in preview mode
9. **Priority hierarchy**: (a) colloquial language where precise term exists (b) claims without specific data (c) missing reasoning/mechanism (d) structural issues

### AI Feedback Phase Progression (for future modules)
- Phase 1: Specific and concrete — "What is the precise term for what happens when atoms lose electrons?" + resource hint
- Phase 2: Slightly broader — "Check your glossary" instead of "Check the terminology panel, scan the You Saw It When column"
- Phase 3: Open — asks the question with no resource pointer
- Phase 4: Feedback disappears unless student requests it

### Terminology Reference Panel
- Collapsible panel below the writing area
- Full 3-column table: Term | Definition | You Observed It When…
- Designed for scanning the observation column to find the right term
- Auto-opens when AI feedback says hint: "terminology"

### Workflow: Paper Notebook → Digital Report
- Lab notebook is physical paper, used DURING the experiment
- Research report is digital, written AFTER the experiment using notebook as source material
- Entry screen reminds: "Have your lab notebook open to today's entry before you begin"
- This separation reinforces the distinction between data collection and data analysis
- Paper notebook forces encoding at moment of observation; digital tool is for structured interpretation

---

## Deployment Details

- **URL**: https://research-report-tool.vercel.app/
- **GitHub**: https://github.com/ArchonGraceland/research-report-tool
- **Stack**: Next.js (App Router) on Vercel
- **API key**: stored as Vercel environment variable `ANTHROPIC_API_KEY`, never reaches browser
- **API route**: `/api/feedback` proxies requests to Claude Sonnet
- **Cost**: ~$0.003 per feedback check, ~$2 for full 62-module curriculum
- **Model**: claude-sonnet-4-20250514

---

## What Needs to Be Done Next

### Immediate: Rebuild as Markdown
- Module C2 document → clean printable markdown
- Instructor guide → clean printable markdown  
- Lab notebook template → clean printable markdown
- All content is finalized above; just needs formatting

### After Testing with Student
- Update curriculum spec with new Section 8.8: AI Feedback System
- Update assessment spec to reflect instructor's shifted role (portfolio-level review, not draft-level editing)
- Build modules C1, P1, B1 using C2 as template
- Make the report tool module-agnostic (load module data from config, not hardcoded)

### Future Tool Improvements
- Save/load report progress (currently lost on page refresh)
- Export finished report as PDF
- Portfolio view showing all completed reports
- Progress tracking dashboard from assessment spec
