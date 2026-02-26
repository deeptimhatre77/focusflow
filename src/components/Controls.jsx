import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

export default function Controls({ isRunning, start, pause, reset }) {
  const baseStyle = {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "none",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontWeight: "500",
    transition: "all 0.2s ease",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginTop: "18px",
      }}
    >
      {/* Start */}
      <button
        onClick={start}
        disabled={isRunning}
        style={{
          ...baseStyle,
          background: "#2C3E50",
          color: "#fff",
          opacity: isRunning ? 0.5 : 1,
          cursor: isRunning ? "not-allowed" : "pointer",
        }}
      >
        <FaPlay size={12} /> Start
      </button>

      {/* Pause */}
      <button
        onClick={pause}
        disabled={!isRunning}
        style={{
          ...baseStyle,
          background: "#7F8C8D",
          color: "#fff",
          opacity: !isRunning ? 0.5 : 1,
          cursor: !isRunning ? "not-allowed" : "pointer",
        }}
      >
        <FaPause size={12} /> Pause
      </button>

      {/* Reset */}
      <button
        onClick={reset}
        style={{
          ...baseStyle,
          background: "#922B21",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <FaRedo size={12} /> Reset
      </button>
    </div>
  );
}