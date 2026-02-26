export default function SessionCounter({ sessions }) {
  return (
    <p style={{ marginTop: "10px", fontSize: "13px", opacity: 0.7 }}>
      Completed Sessions: {sessions}
    </p>
  );
}