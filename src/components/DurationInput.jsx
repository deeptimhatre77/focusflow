export default function DurationInput({ label, duration, setDuration }) {
  return (
    <div
      style={{
        marginTop: "18px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        fontSize: "13px",
      }}
    >
      <span>{label}</span>

      <input
        type="number"
        value={duration}
        min="1"
        onChange={(e) => setDuration(Number(e.target.value))}
        style={{
          width: "60px",
          padding: "6px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          textAlign: "center",
        }}
      />

      <span>min</span>
    </div>
  );
}