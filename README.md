# FocusFlow ⏳

A clean, modern, and minimal Pomodoro timer built using React + Vite.

Stay focused. Take breaks. Build momentum.

---

# 📌 Overview

FocusFlow is a productivity timer based on the Pomodoro Technique.
It allows users to switch between Focus, Short Break, and Long Break sessions with customizable durations, dark mode support, persistent settings, and smooth UI animations.

This project was built from scratch using Vite and React, then enhanced with modern UI practices, persistent storage, and Progressive Web App (PWA) configuration.

---

# 🧠 What is the Pomodoro Technique?

The Pomodoro Technique is a time management method that breaks work into focused intervals followed by short breaks.

Learn more:
https://en.wikipedia.org/wiki/Pomodoro_Technique

---

# 🚀 How This Project Was Created (From Scratch)

## 1️⃣ Create Vite + React Project

```bash
npm create vite@latest focusflow
```

Choose:
- Framework: React
- Variant: JavaScript

Then:

```bash
cd focusflow
npm install
```

---

## 2️⃣ Install Required Dependencies

### Lucide Icons
```bash
npm install lucide-react
```

### Framer Motion
```bash
npm install framer-motion
```

### Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 3️⃣ Run Development Server

```bash
npm run dev
```

App runs locally at:
http://localhost:5173/

---

## 4️⃣ Build Production Version

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

This generates optimized files inside the `dist/` folder.

---

# 🎨 App Icon & Favicon Setup

To create a professional, installable web app icon:

1. Designed the base 1024×1024 icon using **Canva**
2. Generated all required favicon and PWA files using:

👉 https://realfavicongenerator.net/

This ensured:
- Proper Android support
- iOS home screen support
- Web app manifest compatibility
- Multi-resolution favicon setup
- Production-ready configuration

---

# ✨ Features Implemented

- Focus / Short Break / Long Break modes
- Separate timers for each mode
- Customizable durations
- Start / Pause / Reset controls
- Circular animated progress ring
- Dark / Light mode toggle
- Local storage persistence
- Professional hover effects
- Responsive layout
- Progressive Web App (PWA) ready

---

# 💾 Local Storage Implementation

The app stores:

- Dark mode preference
- Custom focus duration
- Custom short break duration
- Custom long break duration

This ensures:
- Settings persist after refresh
- Professional user experience
- No backend required

---

# 📁 Complete Project Structure

```
focusflow/
│
├── node_modules/
├── dist/
│
├── public/
│   ├── assets/
│   │   └── screenshots of UI
│   │
│   ├── web-app-manifest-192x192.png
│   ├── web-app-manifest-512x512.png
│   ├── site.webmanifest
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── favicon-96x96.png
│   └── apple-touch-icon.png
│
├── src/
│   │
│   ├── components/
│   │   ├── Controls.jsx
│   │   ├── DurationInput.jsx
│   │   ├── Footer.jsx
│   │   ├── HeaderIcons.jsx
│   │   ├── ModeSwitcher.jsx
│   │   ├── ProgressRing.jsx
│   │   ├── SessionCounter.jsx
│   │   └── TimeCard.jsx
│   │
│   ├── hooks/
│   │   └── useTimer.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

# 🛠 Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- Local Storage API
- Progressive Web App Manifest

---

# 🧪 Available Commands

Install dependencies:
```bash
npm install
```

Start development:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

---

# 🌗 Progressive Web App Support

FocusFlow includes:

- Web App Manifest
- Android-compatible icons
- Apple touch icon
- Multi-resolution favicon setup

This allows:
- “Add to Home Screen” on mobile
- Installable web app experience
- Native-like appearance

---

# 👩‍💻 Author

Designed & Developed by Deepti M. © 2026

---

# 📄 License

MIT License