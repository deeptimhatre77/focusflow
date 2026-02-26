import { useState, useEffect, useRef } from "react";

export default function useTimer() {
  const [mode, setMode] = useState("focus");

  const [focusDuration, setFocusDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);

  const [sessions, setSessions] = useState(0);

  const audioRef = useRef(null);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("focusflow"));
    if (saved) {
      setFocusDuration(saved.focusDuration ?? 25);
      setShortBreakDuration(saved.shortBreakDuration ?? 5);
      setLongBreakDuration(saved.longBreakDuration ?? 15);
      setSessions(saved.sessions ?? 0);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "focusflow",
      JSON.stringify({
        focusDuration,
        shortBreakDuration,
        longBreakDuration,
        sessions,
      })
    );
  }, [focusDuration, shortBreakDuration, longBreakDuration, sessions]);

  const getInitialTime = () => {
    if (mode === "focus") return focusDuration * 60;
    if (mode === "shortBreak") return shortBreakDuration * 60;
    return longBreakDuration * 60;
  };

  const [timeLeft, setTimeLeft] = useState(getInitialTime());
  const [isRunning, setIsRunning] = useState(false);

  // Reset time when mode or duration changes
  useEffect(() => {
    setTimeLeft(getInitialTime());
    setIsRunning(false);
  }, [mode, focusDuration, shortBreakDuration, longBreakDuration]);

  useEffect(() => {
    let interval = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);

      if (mode === "focus") {
        setSessions((prev) => prev + 1);
      }

      audioRef.current?.play();
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTimeLeft(getInitialTime());
  };

  const totalSeconds = getInitialTime();

  const getRingColor = () => {
    if (mode === "focus") return "#C0392B";
    if (mode === "shortBreak") return "#16A085";
    return "#2C3E50";
  };

  return {
    mode,
    setMode,
    focusDuration,
    setFocusDuration,
    shortBreakDuration,
    setShortBreakDuration,
    longBreakDuration,
    setLongBreakDuration,
    timeLeft,
    totalSeconds,
    isRunning,
    start,
    pause,
    reset,
    sessions,
    audioRef,
    getRingColor,
  };
}