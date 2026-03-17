import { useState, useEffect, useRef } from "react";

const C2_MODULE = {
  id: "C2",
  title: "Can You Make a Battery from Fruit?",
  subject: "Chemistry",
  tier: "Tier 1",
  phase: 1,
  terms: [
    {
      term: "Voltage",
      definition: "The electrical potential difference between two points, measured in volts (V). It represents the energy available to push electrons through a circuit.",
      observation: "The multimeter displayed ~0.9V between the zinc and copper strips in the lemon (Step 2).",
    },
    {
      term: "Oxidation",
      definition: "The loss of electrons by an atom, ion, or molecule during a chemical reaction. In this experiment, zinc atoms lost electrons and entered solution as Zn²⁺ ions.",
      observation: "The zinc strip showed pitting and surface damage where it sat inside the lemon (Step 3).",
    },
    {
      term: "Reduction",
      definition: "The gain of electrons by an atom, ion, or molecule during a chemical reaction. In this experiment, hydrogen ions gained electrons at the copper surface.",
      observation: "Tiny bubbles of hydrogen gas appeared on the copper strip inside the lemon (Step 4).",
    },
    {
      term: "Electrolyte",
      definition: "A substance that produces ions when dissolved, allowing the solution to conduct electricity. The citric acid in lemon juice is the electrolyte here.",
      observation: "When the fruit was removed and the metal strips touched directly, voltage dropped to nearly zero (Step 5).",
    },
    {
      term: "Electrode",
      definition: "A conductor through which electricity enters or leaves a solution. The anode (zinc) is the site of oxidation; the cathode (copper) is the site of reduction.",
      observation: "The zinc and copper strips were the two electrodes — without both different metals, no voltage was produced (Steps 2–4).",
    },
  ],
};

const C2_SECTIONS = [
  {
    id: "question",
    number: 1,
    title: "Research Question",
    prompt: "What question are you trying to answer? Write it as a single, specific, testable question. A good research question names your independent variable (what you changed) and your dependent variable (what you measured).",
    example: 'Example: "Does the type of fruit used as an electrolyte affect the voltage produced in a galvanic cell with zinc and copper electrodes?"',
    guidance: "Notice the example names both the independent variable (type of fruit) and the dependent variable (voltage), and specifies the constants (zinc and copper electrodes). Vague questions like \"Can fruit make electricity?\" give you nothing to measure.",
    skill: "Formulating a precise, testable question",
    placeholder: "Write your research question here...",
    minHeight: 80,
    requiredTerms: [],
  },
  {
    id: "hypothesis",
    number: 2,
    title: "Hypothesis",
    prompt: "State your prediction AND explain your reasoning. A hypothesis is not a guess — it is a prediction supported by logic. Use the terms electrolyte, voltage, and oxidation in your reasoning.",
    example: '"I hypothesize that the lemon will produce a higher voltage than the potato because citric acid is a stronger electrolyte than the starch-based solution inside a potato, meaning more ions are available to facilitate the redox reaction at the electrode surfaces."',
    guidance: 'The reasoning is what separates a hypothesis from a guess. "The lemon will work better" is a guess. "The lemon will produce higher voltage because its electrolyte has higher ion concentration" is a hypothesis — it connects prediction to mechanism.',
    skill: "Making predictions grounded in prior knowledge",
    placeholder: "State your hypothesis and explain your reasoning...",
    minHeight: 120,
    requiredTerms: ["electrolyte", "voltage", "oxidation"],
  },
  {
    id: "design",
    number: 3,
    title: "Experimental Design",
    prompt: "Describe what you did in your own words. Identify your independent variable (what you changed), your dependent variable (what you measured), and your controlled variables (what you kept the same). Explain why you controlled them.",
    example: '"I tested four different fruits (lemon, potato, apple, orange) as electrolytes — that was my independent variable. My dependent variable was the voltage measured across the electrodes using a digital multimeter. I controlled the electrode materials (zinc and copper), the depth of insertion (~2.5 cm), and the distance between electrodes (~3 cm) to ensure any voltage differences were caused by the electrolyte, not by the setup."',
    guidance: "Naming your variables precisely is a core scientific skill. If you can't name the independent, dependent, and controlled variables, you don't fully understand what the experiment tested.",
    skill: "Identifying variables, controls, and experimental logic",
    placeholder: "Describe your experimental design...",
    minHeight: 160,
    requiredTerms: ["electrode"],
  },
  {
    id: "results",
    number: 4,
    title: "Results",
    prompt: "Report your data. Include every voltage reading from each fruit, observations of the electrodes, the series circuit voltage, and the current measurement. Present numbers with units. Do NOT interpret yet — just state what happened.",
    example: '"The lemon cell produced 0.92V. The orange cell produced 0.87V. The potato cell produced 0.83V. The apple cell produced 0.71V. Two lemon cells wired in series produced 1.78V and powered the LED at 0.4 mA. The zinc electrode in the lemon showed visible pitting after 15 minutes. Tiny bubbles were visible on the copper electrode."',
    guidance: "Results report facts. Analysis interprets them. Separating the two is a discipline that prevents you from seeing what you expected instead of what actually happened.",
    skill: "Distinguishing observation from interpretation",
    placeholder: "Report your observations and data...",
    minHeight: 160,
    requiredTerms: [],
  },
  {
    id: "analysis",
    number: 5,
    title: "Analysis & Conclusion",
    prompt: "Now interpret. Was your hypothesis supported or contradicted? Cite specific data from your results. Use the terms oxidation, reduction, electrolyte, electrode, and voltage correctly. Explain WHY the results came out the way they did.",
    example: '"My hypothesis was supported: the lemon produced the highest voltage (0.92V), consistent with citric acid being a stronger electrolyte. The pitting on the zinc electrode confirms that oxidation occurred — zinc atoms lost electrons to the external circuit. The bubbles on the copper electrode are evidence of reduction — hydrogen ions in the electrolyte gained electrons at the cathode."',
    guidance: "Your analysis must use at least 4 of the 5 key terms and reference at least 2 specific data points. This is where you demonstrate understanding, not just recall.",
    skill: "Evidence-based argumentation; connecting data to theory",
    placeholder: "Analyze your results and state your conclusion...",
    minHeight: 200,
    requiredTerms: ["oxidation", "reduction", "electrolyte", "electrode", "voltage"],
  },
  {
    id: "next",
    number: 6,
    title: "Next Investigation",
    prompt: "What new question did this experiment raise? Propose a follow-up experiment. Be specific: name the variable you would change, what you would measure, and what you predict would happen.",
    example: '"I noticed the voltage slowly decreased over time. My next investigation would test whether electrolyte concentration affects voltage decay rate — specifically, I would dilute lemon juice to 75%, 50%, and 25% concentration, measure initial voltage for each, then record voltage every 5 minutes for 30 minutes. I predict that lower concentrations will show faster voltage decay because fewer ions are available to sustain the redox reaction."',
    guidance: "Every experiment should end with a new question. The quality of your next question is the best measure of how deeply you understood this experiment.",
    skill: "Identifying new questions; science as iterative",
    placeholder: "What would you investigate next?",
    minHeight: 100,
    requiredTerms: [],
  },
];

/* ─── COMPONENTS ─── */

function TermChip({ term, definition, observation, isOpen, onToggle }) {
  return (
    <div style={{ display: "inline-block", margin: "0 6px 8px 0", verticalAlign: "top" }}>
      <button
        onClick={onToggle}
        style={{
          background: isOpen ? "#1a3a5c" : "#e8f0f7",
          color: isOpen ? "#fff" : "#1a3a5c",
          border: "1.5px solid #1a3a5c",
          borderRadius: 20,
          padding: "5px 14px",
          fontSize: 13,
          fontFamily: "'Source Serif 4', Georgia, serif",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.2s ease",
          letterSpacing: "0.02em",
        }}
      >
        {term}
      </button>
      {isOpen && (
        <div
          style={{
            background: "#f7fafc",
            border: "1px solid #d0dbe6",
            borderRadius: 8,
            padding: "10px 14px",
            marginTop: 6,
            fontSize: 13,
            lineHeight: 1.6,
            color: "#2d3748",
            fontFamily: "'Source Serif 4', Georgia, serif",
            maxWidth: 360,
          }}
        >
          <strong>{term}:</strong> {definition}
          <div
            style={{
              marginTop: 8,
              paddingTop: 8,
              borderTop: "1px solid #e2e8f0",
              fontSize: 12,
              color: "#718096",
            }}
          >
            <strong>You saw it when:</strong> {observation}
          </div>
        </div>
      )}
    </div>
  );
}

function TermTracker({ text, requiredTerms, allTerms }) {
  if (!requiredTerms || requiredTerms.length === 0) return null;
  const lower = (text || "").toLowerCase();
  const found = requiredTerms.filter((t) => lower.includes(t.toLowerCase()));
  const missing = requiredTerms.filter((t) => !lower.includes(t.toLowerCase()));

  return (
    <div
      style={{
        background: "#f7fafc",
        border: "1px solid #e2e8f0",
        borderRadius: 8,
        padding: "10px 14px",
        marginTop: 12,
        fontSize: 12,
        lineHeight: 1.6,
      }}
    >
      <div style={{ fontWeight: 700, color: "#1a3a5c", marginBottom: 4, fontFamily: "'DM Sans', sans-serif" }}>
        Term Tracker — {found.length}/{requiredTerms.length} used
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {requiredTerms.map((term) => {
          const used = lower.includes(term.toLowerCase());
          return (
            <span
              key={term}
              style={{
                display: "inline-block",
                padding: "2px 10px",
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 600,
                background: used ? "#d4edda" : "#fed7d7",
                color: used ? "#2d6a4f" : "#c53030",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {used ? "✓" : "○"} {term}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function ProgressBar({ current, total, completedSections }) {
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
      {Array.from({ length: total }, (_, i) => {
        const isCompleted = completedSections.has(i);
        const isCurrent = i === current;
        return (
          <div
            key={i}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              background: isCompleted ? "#1a3a5c" : isCurrent ? "#4a90c4" : "#dde5ed",
              transition: "background 0.3s ease",
            }}
          />
        );
      })}
    </div>
  );
}

function PreviewReport({ data, module, studentName, date }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: "48px 40px",
        maxWidth: 680,
        margin: "0 auto",
        fontFamily: "'Source Serif 4', Georgia, serif",
        color: "#1a1a2e",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
        border: "1px solid #e2e8f0",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 32, paddingBottom: 24, borderBottom: "2px solid #1a3a5c" }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#718096",
            marginBottom: 8,
            fontFamily: "'DM Sans', Helvetica, sans-serif",
          }}
        >
          Research Report — Module {module.id}
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 8px 0", lineHeight: 1.3 }}>
          {module.title}
        </h1>
        <div style={{ fontSize: 14, color: "#4a5568" }}>
          {studentName || "Student Name"} · {date}
        </div>
      </div>

      {C2_SECTIONS.map((section) => {
        const content = data[section.id];
        if (!content || !content.trim()) return null;
        return (
          <div key={section.id} style={{ marginBottom: 28 }}>
            <h2
              style={{
                fontSize: 13,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#1a3a5c",
                marginBottom: 8,
                fontFamily: "'DM Sans', Helvetica, sans-serif",
              }}
            >
              {section.number}. {section.title}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{content}</p>
          </div>
        );
      })}

      <div style={{ marginTop: 32, paddingTop: 16, borderTop: "1px solid #e2e8f0", fontSize: 12, color: "#a0aec0", textAlign: "center" }}>
        Experiment-First Science Curriculum · Phase 1 Guided Report
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */

export default function ResearchReportTool() {
  const [currentSection, setCurrentSection] = useState(0);
  const [data, setData] = useState({});
  const [openTerms, setOpenTerms] = useState({});
  const [showExamples, setShowExamples] = useState(true);
  const [showGuidance, setShowGuidance] = useState(true);
  const [mode, setMode] = useState("write");
  const [studentName, setStudentName] = useState("");
  const [showNameInput, setShowNameInput] = useState(true);
  const textareaRef = useRef(null);

  const module = C2_MODULE;
  const section = C2_SECTIONS[currentSection];
  const completedSections = new Set(
    C2_SECTIONS.map((s, i) => (data[s.id] && data[s.id].trim().length > 20 ? i : -1)).filter((i) => i >= 0)
  );

  useEffect(() => {
    if (textareaRef.current && mode === "write") {
      textareaRef.current.focus();
    }
  }, [currentSection, mode]);

  const handleTextChange = (value) => {
    setData((prev) => ({ ...prev, [section.id]: value }));
  };

  const toggleTerm = (term) => {
    setOpenTerms((prev) => ({ ...prev, [term]: !prev[term] }));
  };

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const wordCount = (data[section?.id] || "").split(/\s+/).filter(Boolean).length;

  // ─── NAME INPUT ───
  if (showNameInput) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg, #f0f4f8 0%, #e2e8f0 40%, #f7fafc 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Sans', Helvetica, sans-serif",
          padding: 20,
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "48px 40px",
            maxWidth: 480,
            width: "100%",
            textAlign: "center",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#1a3a5c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: 24,
            }}
          >
            🔋
          </div>
          <h1
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#1a1a2e",
              margin: "0 0 6px 0",
              fontFamily: "'Source Serif 4', Georgia, serif",
            }}
          >
            Research Report
          </h1>
          <p style={{ fontSize: 14, color: "#718096", margin: "0 0 4px 0" }}>
            Module {module.id}: {module.title}
          </p>
          <p style={{ fontSize: 12, color: "#a0aec0", margin: "0 0 28px 0" }}>
            Phase {module.phase} — Guided Report · 15–20 minutes
          </p>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Your name"
            style={{
              width: "100%",
              padding: "14px 16px",
              fontSize: 16,
              border: "2px solid #e2e8f0",
              borderRadius: 10,
              outline: "none",
              fontFamily: "'DM Sans', Helvetica, sans-serif",
              boxSizing: "border-box",
              transition: "border-color 0.2s",
              marginBottom: 16,
            }}
            onFocus={(e) => (e.target.style.borderColor = "#4a90c4")}
            onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
            onKeyDown={(e) => {
              if (e.key === "Enter" && studentName.trim()) setShowNameInput(false);
            }}
          />
          <button
            onClick={() => studentName.trim() && setShowNameInput(false)}
            disabled={!studentName.trim()}
            style={{
              width: "100%",
              padding: "14px",
              fontSize: 15,
              fontWeight: 600,
              background: studentName.trim() ? "#1a3a5c" : "#cbd5e0",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              cursor: studentName.trim() ? "pointer" : "default",
              fontFamily: "'DM Sans', Helvetica, sans-serif",
              transition: "background 0.2s",
            }}
          >
            Begin Report
          </button>
        </div>
      </div>
    );
  }

  // ─── PREVIEW MODE ───
  if (mode === "preview") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(160deg, #f0f4f8 0%, #e2e8f0 40%, #f7fafc 100%)",
          padding: "32px 20px",
          fontFamily: "'DM Sans', Helvetica, sans-serif",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <button
              onClick={() => setMode("write")}
              style={{
                background: "none",
                border: "1.5px solid #1a3a5c",
                borderRadius: 8,
                padding: "8px 18px",
                fontSize: 13,
                fontWeight: 600,
                color: "#1a3a5c",
                cursor: "pointer",
                fontFamily: "'DM Sans', Helvetica, sans-serif",
              }}
            >
              ← Back to editing
            </button>
            <span style={{ fontSize: 13, color: "#718096" }}>
              {completedSections.size} of {C2_SECTIONS.length} sections complete
            </span>
          </div>
          <PreviewReport data={data} module={module} studentName={studentName} date={today} />
        </div>
      </div>
    );
  }

  // ─── WRITE MODE ───
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #f0f4f8 0%, #e2e8f0 40%, #f7fafc 100%)",
        fontFamily: "'DM Sans', Helvetica, sans-serif",
        color: "#1a1a2e",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#1a3a5c",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#8badc9",
              marginBottom: 2,
            }}
          >
            Module {module.id} · {module.subject} · Phase {module.phase}
          </div>
          <div
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: "#fff",
              fontFamily: "'Source Serif 4', Georgia, serif",
            }}
          >
            {module.title}
          </div>
        </div>
        <button
          onClick={() => setMode("preview")}
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 8,
            padding: "8px 18px",
            fontSize: 13,
            fontWeight: 600,
            color: "#fff",
            cursor: "pointer",
            fontFamily: "'DM Sans', Helvetica, sans-serif",
          }}
        >
          Preview Report
        </button>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "24px 20px" }}>
        {/* Progress */}
        <ProgressBar current={currentSection} total={C2_SECTIONS.length} completedSections={completedSections} />
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 28 }}>
          <span style={{ fontSize: 12, color: "#718096" }}>
            Section {section.number} of {C2_SECTIONS.length}
          </span>
          <span style={{ fontSize: 12, color: "#718096" }}>{section.skill}</span>
        </div>

        {/* Main card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            padding: "32px 28px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
            marginBottom: 20,
          }}
        >
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              margin: "0 0 4px 0",
              fontFamily: "'Source Serif 4', Georgia, serif",
              color: "#1a3a5c",
            }}
          >
            {section.number}. {section.title}
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4a5568", margin: "8px 0 0 0" }}>
            {section.prompt}
          </p>

          {showExamples && (
            <div
              style={{
                background: "#f7fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 8,
                padding: "12px 16px",
                marginTop: 12,
                fontSize: 13,
                lineHeight: 1.6,
                color: "#4a5568",
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontStyle: "italic",
              }}
            >
              {section.example}
            </div>
          )}

          {showGuidance && section.guidance && (
            <div
              style={{
                background: "#fffbeb",
                border: "1px solid #f0d58c",
                borderLeft: "4px solid #c05621",
                borderRadius: 8,
                padding: "10px 14px",
                marginTop: 10,
                fontSize: 12,
                lineHeight: 1.6,
                color: "#744210",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <strong>Why this matters:</strong> {section.guidance}
            </div>
          )}

          <textarea
            ref={textareaRef}
            value={data[section.id] || ""}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder={section.placeholder}
            style={{
              width: "100%",
              minHeight: section.minHeight,
              marginTop: 16,
              padding: "14px 16px",
              fontSize: 15,
              lineHeight: 1.7,
              border: "2px solid #e2e8f0",
              borderRadius: 10,
              outline: "none",
              resize: "vertical",
              fontFamily: "'Source Serif 4', Georgia, serif",
              color: "#1a1a2e",
              boxSizing: "border-box",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#4a90c4")}
            onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
          />

          {/* Term tracker for sections that require specific terms */}
          <TermTracker
            text={data[section.id] || ""}
            requiredTerms={section.requiredTerms}
            allTerms={module.terms}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", gap: 16 }}>
              <label
                style={{
                  fontSize: 12,
                  color: "#a0aec0",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={showExamples}
                  onChange={() => setShowExamples(!showExamples)}
                  style={{ accentColor: "#1a3a5c" }}
                />
                Examples
              </label>
              <label
                style={{
                  fontSize: 12,
                  color: "#a0aec0",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={showGuidance}
                  onChange={() => setShowGuidance(!showGuidance)}
                  style={{ accentColor: "#c05621" }}
                />
                Guidance
              </label>
            </div>
            <span style={{ fontSize: 12, color: "#a0aec0" }}>
              {wordCount > 0 ? `${wordCount} words` : ""}
            </span>
          </div>
        </div>

        {/* Key Terminology */}
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            padding: "20px 24px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#718096",
              marginBottom: 12,
            }}
          >
            Key Terminology — tap to see definition & observation
          </div>
          <div>
            {module.terms.map((t) => (
              <TermChip
                key={t.term}
                term={t.term}
                definition={t.definition}
                observation={t.observation}
                isOpen={!!openTerms[t.term]}
                onToggle={() => toggleTerm(t.term)}
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <button
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            style={{
              flex: 1,
              padding: "14px",
              fontSize: 14,
              fontWeight: 600,
              background: currentSection === 0 ? "#e2e8f0" : "#fff",
              color: currentSection === 0 ? "#a0aec0" : "#1a3a5c",
              border: currentSection === 0 ? "none" : "1.5px solid #1a3a5c",
              borderRadius: 10,
              cursor: currentSection === 0 ? "default" : "pointer",
              fontFamily: "'DM Sans', Helvetica, sans-serif",
            }}
          >
            ← Previous
          </button>
          {currentSection < C2_SECTIONS.length - 1 ? (
            <button
              onClick={() => setCurrentSection(currentSection + 1)}
              style={{
                flex: 1,
                padding: "14px",
                fontSize: 14,
                fontWeight: 600,
                background: "#1a3a5c",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                fontFamily: "'DM Sans', Helvetica, sans-serif",
              }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => setMode("preview")}
              style={{
                flex: 1,
                padding: "14px",
                fontSize: 14,
                fontWeight: 600,
                background: "#2d6a4f",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                fontFamily: "'DM Sans', Helvetica, sans-serif",
              }}
            >
              View Finished Report
            </button>
          )}
        </div>

        {/* Section nav dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
          {C2_SECTIONS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrentSection(i)}
              title={s.title}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                border: i === currentSection ? "2px solid #1a3a5c" : "1.5px solid #d0dbe6",
                background: completedSections.has(i)
                  ? "#1a3a5c"
                  : i === currentSection
                  ? "#e8f0f7"
                  : "#fff",
                color: completedSections.has(i) ? "#fff" : "#4a5568",
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'DM Sans', Helvetica, sans-serif",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
