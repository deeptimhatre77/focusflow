import { useState } from "react";
import useTimer from "./hooks/useTimer";
import TimerCard from "./components/TimerCard";
import ProgressRing from "./components/ProgressRing";
import Controls from "./components/Controls";
import DurationInput from "./components/DurationInput";
import SessionCounter from "./components/SessionCounter";
import Footer from "./components/Footer";
import HeaderIcons from "./components/HeaderIcons";
import ModeSwitcher from "./components/ModeSwitcher";

function App() {
  const timer = useTimer();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <TimerCard darkMode={darkMode}>
      {/* Top-right icons */}
      <HeaderIcons darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* App Title */}
      <h1 style={{ marginBottom: "15px", fontSize: "22px" }}>
        FocusFlow
      </h1>

      {/* Focus  Short Bresk  Long Break */}
      <ModeSwitcher 
        mode={timer.mode} 
        setMode={timer.setMode}
        darkMode={darkMode}
      />

      {/* Timer */}
      <ProgressRing
        timeLeft={timer.timeLeft}
        totalSeconds={timer.totalSeconds}
        color={timer.getRingColor()}
      />

      {/* Controls */}
      <Controls
        isRunning={timer.isRunning}
        start={timer.start}
        pause={timer.pause}
        reset={timer.reset}
      />

      {/* Custom session input */}
      {timer.mode === "focus" && (
        <DurationInput
          label="Focus Minutes"
          duration={timer.focusDuration}
          setDuration={timer.setFocusDuration}
        />
      )}

      {timer.mode === "shortBreak" && (
        <DurationInput
          label="Short Break Minutes"
          duration={timer.shortBreakDuration}
          setDuration={timer.setShortBreakDuration}
        />
      )}

      {timer.mode === "longBreak" && (
        <DurationInput
          label="Long Break Minutes"
          duration={timer.longBreakDuration}
          setDuration={timer.setLongBreakDuration}
        />
      )}

      {/* Completed sessions */}
      <SessionCounter sessions={timer.sessions} />

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Sound */}
      <audio
        ref={timer.audioRef}
        src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
        preload="auto"
      />
    </TimerCard>
  );
}

export default App;