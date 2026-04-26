# Weather App (JavaScript ES6)

A simple weather application built using modern JavaScript (ES6) that fetches weather data either from a local JSON file (for offline/testing) or from the OpenWeather API (for live data).

## 🚀 Features

- Search weather by city name
- Fetch real-time weather data from OpenWeather API
- Local JSON mode for offline/testing
- Displays:
  - Temperature
  - Min/Max temperature
  - Weather conditions
  - Country
- Displays current date and time
- Error handling for invalid city input

## 🛠️ Tech Stack

- JavaScript (ES6 Modules)
- HTML5
- Fetch API
- npm (project setup and dependency management)
- live-server (local web server)

## 📂 Project Structure

```
.
├── index.html
├── app.js
├── api.js
├── config.js
├── mock.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 📋 Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher recommended)

Verify installation:

```
node -v
```
```
npm -v
```

## ⚙️ Installation & Setup

1. Clone the repository

2. Install dependencies
```
npm install
```

3. Run the application
```
npm start
```

4. Open in browser
```
http://localhost:8080
```

## 🔄 Application Modes

### 🟢 Local Mode (Mock JSON)

Uses static JSON data for testing without API calls.

Configure in `config.js`: 
``
USE_LOCAL: true
``
- No internet required
- Useful for development/testing

---

### 🌐 Live Mode (API)

Fetches real-time data from OpenWeather API.

Configure in `config.js`:
``
USE_LOCAL: false
```

---

## 🌐 API Used

- OpenWeather API (https://api.openweathermap.org)

> Note: API key is stored in frontend for simplicity. In production, it should be secured using environment variables or backend.

## 📖 Learning Outcomes

This project demonstrates:

- ES6 modules (`import` / `export`)
- API integration using Fetch
- Asynchronous JavaScript (`async/await`)
- DOM manipulation
- Error handling in frontend applications
- Running apps using a local web server
- Switching between mock and live data sources
