export default function ProgressRing({
  timeLeft,
  totalSeconds,
  color,
}) {
  const radius = 80;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const progress =
    timeLeft / totalSeconds;

  const strokeDashoffset =
    circumference - progress * circumference;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <div
      style={{
        margin: "16px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <svg height={radius * 2} width={radius * 2}>
        {/* Background ring */}
        <circle
          stroke="rgba(0,0,0,0.08)"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress ring */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.5s ease",
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />

        {/* Time text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20"
          fontWeight="600"
          fill="#2C3E50"
        >
          {formattedTime}
        </text>
      </svg>
    </div>
  );
}