export default function ModeSwitcher({ mode, setMode, darkMode }) {
  const segmentBg = darkMode ? "#2C2C2C" : "#EAECEE";
  const textColor = darkMode ? "#ffffff" : "#2C3E50";
  const activeBg = darkMode ? "#ffffff" : "#2C3E50";
  const activeText = darkMode ? "#2C2C2C" : "#ffffff";

  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
      <div
        style={{
          display: "flex",
          background: segmentBg,
          borderRadius: "8px",
          padding: "4px",
          fontSize: "12px",
        }}
      >
        {["focus", "shortBreak", "longBreak"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              background: mode === m ? activeBg : "transparent",
              color: mode === m ? activeText : textColor,
              fontWeight: "500",
              transition: "0.2s ease",
            }}
          >
            {m === "focus" && "Focus"}
            {m === "shortBreak" && "Short Break"}
            {m === "longBreak" && "Long Break"}
          </button>
        ))}
      </div>
    </div>
  );
}