import { useState, useEffect, useRef } from "react";

const SECTIONS = [
  {
    id: "question",
    number: 1,
    title: "Research Question",
    prompt: "What question are you trying to answer? Write it as a single, specific, testable question.",
    example: "Example: \"Does the type of fruit used as an electrolyte affect the voltage produced in an electrochemical cell?\"",
    skill: "Formulating a precise, falsifiable question",
    placeholder: "Write your research question here...",
    minHeight: 80,
  },
  {
    id: "hypothesis",
    number: 2,
    title: "Hypothesis",
    prompt: "Based on what you already know, what do you predict will happen? State your prediction using the scientific terms you've learned, and explain your reasoning.",
    example: "Example: \"I hypothesize that the lemon will produce a higher voltage than the potato because citric acid is a stronger electrolyte than starch, meaning more ions are available in solution to facilitate the redox reaction at the electrode surfaces.\"",
    skill: "Making predictions grounded in prior knowledge; using precise terminology",
    placeholder: "State your hypothesis and explain your reasoning...",
    minHeight: 120,
  },
  {
    id: "design",
    number: 3,
    title: "Experimental Design",
    prompt: "Describe what you did in your own words. What was your independent variable? Your dependent variable? What did you control? Why did you make these choices?",
    example: "Example: \"I tested four different fruits (lemon, potato, apple, banana) as electrolytes — that was my independent variable. My dependent variable was the voltage measured across the electrodes. I controlled the electrode materials (zinc and copper), the size of the electrodes, and the depth of insertion...\"",
    skill: "Understanding variables, controls, and experimental logic",
    placeholder: "Describe your experimental design...",
    minHeight: 160,
  },
  {
    id: "results",
    number: 4,
    title: "Results",
    prompt: "What happened? Report your observations and data. Include numbers, measurements, and descriptions. Sketches and tables are encouraged. Do not interpret yet — just report what you observed.",
    example: "Example: \"The lemon cell produced 0.92V. The potato cell produced 0.84V. The apple cell produced 0.68V. The banana cell produced 0.78V. I observed that the zinc electrode in the lemon showed visible pitting after 10 minutes...\"",
    skill: "Distinguishing observation from interpretation; accurate data recording",
    placeholder: "Report your observations and data...",
    minHeight: 160,
  },
  {
    id: "analysis",
    number: 5,
    title: "Analysis & Conclusion",
    prompt: "What do your results mean? Was your hypothesis supported or contradicted? Use specific data from your results to support your argument. Connect your findings to the scientific concepts from this module.",
    example: "Example: \"My hypothesis was supported: the lemon produced the highest voltage (0.92V) compared to the potato (0.84V). This is consistent with the principle that stronger electrolytes — solutions with higher ion concentration — facilitate more efficient oxidation at the anode...\"",
    skill: "Evidence-based argumentation; connecting data to theory",
    placeholder: "Analyze your results and state your conclusion...",
    minHeight: 200,
  },
  {
    id: "next",
    number: 6,
    title: "Next Investigation",
    prompt: "What new question did this experiment raise? If you could design a follow-up experiment, what would you test and why?",
    example: "Example: \"I noticed the voltage from all cells decreased over time. My next investigation would test how electrolyte concentration affects voltage decay rate — specifically, whether diluting the citric acid in the lemon juice produces a proportional decrease in voltage, which would help determine whether ion depletion is the primary cause of voltage drop.\"",
    skill: "Identifying gaps in knowledge; seeing science as iterative",
    placeholder: "What would you investigate next?",
    minHeight: 100,
  },
];

const SAMPLE_MODULE = {
  id: "C2",
  title: "Can You Make a Battery from Fruit?",
  subject: "Chemistry",
  terms: [
    { term: "Oxidation", definition: "The loss of electrons by an atom, ion, or molecule during a chemical reaction." },
    { term: "Reduction", definition: "The gain of electrons by an atom, ion, or molecule during a chemical reaction." },
    { term: "Electrolyte", definition: "A substance that produces ions when dissolved, allowing the solution to conduct electricity." },
    { term: "Electrode", definition: "A conductor through which electricity enters or leaves a substance. In this experiment, the zinc and copper strips." },
    { term: "Voltage", definition: "The electrical potential difference between two points, measured in volts. It represents the \"push\" driving electrons through a circuit." },
  ],
};

function TermChip({ term, definition, isOpen, onToggle }) {
  return (
    <div style={{ display: "inline-block", margin: "0 6px 8px 0" }}>
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
            lineHeight: 1.5,
            color: "#2d3748",
            fontFamily: "'Source Serif 4', Georgia, serif",
            maxWidth: 340,
          }}
        >
          <strong>{term}:</strong> {definition}
        </div>
      )}
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
        <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#718096", marginBottom: 8, fontFamily: "'DM Sans', Helvetica, sans-serif" }}>
          Research Report — Module {module.id}
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 8px 0", lineHeight: 1.3 }}>
          {module.title}
        </h1>
        <div style={{ fontSize: 14, color: "#4a5568" }}>
          {studentName || "Student Name"} · {date}
        </div>
      </div>

      {SECTIONS.map((section) => {
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
    </div>
  );
}

export default function ResearchReportTool() {
  const [currentSection, setCurrentSection] = useState(0);
  const [data, setData] = useState({});
  const [openTerms, setOpenTerms] = useState({});
  const [showExamples, setShowExamples] = useState(true);
  const [mode, setMode] = useState("write"); // write | preview
  const [studentName, setStudentName] = useState("");
  const [showNameInput, setShowNameInput] = useState(true);
  const textareaRef = useRef(null);

  const section = SECTIONS[currentSection];
  const completedSections = new Set(
    SECTIONS.map((s, i) => (data[s.id] && data[s.id].trim().length > 20 ? i : -1)).filter((i) => i >= 0)
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

  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

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
            🔬
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
          <p style={{ fontSize: 14, color: "#718096", margin: "0 0 28px 0" }}>
            Module {SAMPLE_MODULE.id}: {SAMPLE_MODULE.title}
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
              {completedSections.size} of {SECTIONS.length} sections complete
            </span>
          </div>
          <PreviewReport data={data} module={SAMPLE_MODULE} studentName={studentName} date={today} />
        </div>
      </div>
    );
  }

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
          <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8badc9", marginBottom: 2 }}>
            Module {SAMPLE_MODULE.id} · {SAMPLE_MODULE.subject}
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", fontFamily: "'Source Serif 4', Georgia, serif" }}>
            {SAMPLE_MODULE.title}
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
        <ProgressBar current={currentSection} total={SECTIONS.length} completedSections={completedSections} />
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 28 }}>
          <span style={{ fontSize: 12, color: "#718096" }}>
            Section {section.number} of {SECTIONS.length}
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
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4a5568", margin: "8px 0 0 0" }}>{section.prompt}</p>

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

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
            <label style={{ fontSize: 12, color: "#a0aec0", display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={showExamples}
                onChange={() => setShowExamples(!showExamples)}
                style={{ accentColor: "#1a3a5c" }}
              />
              Show examples
            </label>
            <span style={{ fontSize: 12, color: "#a0aec0" }}>
              {(data[section.id] || "").length > 0
                ? `${(data[section.id] || "").split(/\s+/).filter(Boolean).length} words`
                : ""}
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
            Key Terminology — tap to see definition
          </div>
          <div>
            {SAMPLE_MODULE.terms.map((t) => (
              <TermChip key={t.term} term={t.term} definition={t.definition} isOpen={!!openTerms[t.term]} onToggle={() => toggleTerm(t.term)} />
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
          {currentSection < SECTIONS.length - 1 ? (
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
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrentSection(i)}
              title={s.title}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                border: i === currentSection ? "2px solid #1a3a5c" : "1.5px solid #d0dbe6",
                background: completedSections.has(i) ? "#1a3a5c" : i === currentSection ? "#e8f0f7" : "#fff",
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
