export default function TimerCard({ children, darkMode }) {
  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "40px auto",
        padding: "22px",
        borderRadius: "14px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}