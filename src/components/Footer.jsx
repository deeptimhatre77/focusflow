export default function Footer({ darkMode }) {
  return (
    <div
      style={{
        marginTop: "16px",
        paddingTop: "10px",
        fontSize: "12px",
        opacity: 0.6,
        borderTop: darkMode
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(0,0,0,0.08)",
        letterSpacing: "0.5px",
      }}
    >
      Designed & developed by <strong>Deepti M.</strong> © 2026 · FocusFlow
    </div>
  );
}