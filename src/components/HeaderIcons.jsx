import { useState } from "react";
import { FaMoon, FaSun, FaInfoCircle } from "react-icons/fa";

export default function HeaderIcons({ darkMode, setDarkMode }) {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      {/* Top-right Icons */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          display: "flex",
          gap: "12px",
        }}
      >
        {/* Dark Mode Toggle */}
        <span
          title="Toggle Dark Mode"
          onClick={() => setDarkMode(!darkMode)}
          style={{
            cursor: "pointer",
            fontSize: "18px",
            color: darkMode ? "#FFD700" : "#444",
            display: "flex",
            alignItems: "center",
            transition: "0.2s ease",
          }}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </span>

        {/* About Icon */}
        <span
          title="About FocusFlow"
          onClick={() => setAboutOpen(true)}
          style={{
            cursor: "pointer",
            fontSize: "18px",
            color: darkMode ? "#ffffff" : "#444",
            display: "flex",
            alignItems: "center",
            transition: "0.2s ease",
          }}
        >
          <FaInfoCircle />
        </span>
      </div>

      {/* About Modal */}
      {aboutOpen && (
        <div
          onClick={() => setAboutOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "360px",
              padding: "22px",
              borderRadius: "14px",
              fontSize: "13px",
              lineHeight: "1.6",
              background: darkMode ? "#1e1e1e" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
              boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
            }}
          >
            {/* Close Button */}
            <span
              onClick={() => setAboutOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "14px",
                cursor: "pointer",
                fontSize: "16px",
                opacity: 0.6,
              }}
            >
              ×
            </span>

            <strong>What is FocusFlow?</strong>
            <br />
            FocusFlow is a minimal, Pomodoro-based, distraction-free productivity timer
            designed to help you work in structured focus sessions and
            intentional breaks.
            <br /><br />

            <strong>What is the Pomodoro Technique?</strong>
            <br />
            The Pomodoro Technique is a time management method that
            breaks work into focused intervals followed by short breaks
            to improve concentration and reduce mental fatigue.
            Learn more here:{" "}
            <a
              href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: darkMode ? "#4da3ff" : "#2980b9",
                textDecoration: "none",
              }}
            >
              Wikipedia
            </a>
            <br /><br />

            <strong>How to use the FocusFlow Timer?</strong>
            <br />
            • Select Focus, Short Break, or Long Break.
            <br />
            • Set your preferred minutes.
            <br />
            • Press Start and stay focused until the timer ends.
            <br />
            • Take breaks intentionally and repeat the cycle.
            <br /><br />

            {/* Tagline */}
            <div
              style={{
                marginTop: "8px",
                textAlign: "center",
                fontStyle: "italic",
                opacity: 0.75,
              }}
            >
              Stay focused. Take breaks. Build momentum.
            </div>
          </div>
        </div>
      )}
    </>
  );
}