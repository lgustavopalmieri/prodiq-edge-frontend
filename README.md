# 🧾 Production Monitoring Frontend – README

This project is the **frontend** for a real-time industrial production monitoring platform. It provides a clear interface for machine operators and factory managers to track production metrics, machine status, and operation data live, via WebSocket events and an intuitive UI.

---

## 🚀 Tech Stack

* **React + Vite** for fast frontend development
* **Zustand** for state management
* **Tailwind CSS** for clean and responsive UI
* **WebSocket** for live communication with the backend
* **Zod + React Hook Form** for form validation and setup handling

---

## ⚙️ Features

### 🎯 Real-Time Monitoring

* Connects to a WebSocket endpoint (`/ws`)
* Listens for two main message channels(more ones in development):

  * `status`: Machine status updates
  * `operation`: Operation execution tracking info

### 📊 Key Metrics & Indicators

* OEE (Overall Equipment Effectiveness)

  * Performance
  * Quality
  * Availability
* Good vs Defected quantity tracking
* Estimated time to complete the order (based on standard cycle time)
* Machine status alerts

### 🛠️ Setup & Execution Flow

#### When an Order Starts

* The setup form is locked (disabled)
* A **Finish Order** button is displayed but disabled while machine is running
* Estimated time starts counting

#### When Machine Stops

* The **Finish Order** button becomes enabled
* On click, the operator is prompted to:

  * Enter final good & defected quantities
  * Optionally justify machine stops
* After confirmation, the setup form becomes available again

---

## 🧪 Development & Testing

### To run locally:

```bash
npm install
npm run dev
```

Make sure the backend WebSocket server is running at `ws://localhost:8080/ws`

---

## 📁 Project Structure

```bash
src/
├── components/           # Shared layout and UI components
├── features/             # Functional features like Setup, Header, MachineState
├── hooks/                # WebSocket and domain-specific hooks
├── types/                # Domain types (e.g., OperationExecutionTracking)
├── App.tsx               # Root app component with conditional login
```

---

## 📌 Notes

* This project is meant to evolve alongside a clean-architecture backend written in Go
* Each message over WebSocket includes a `channel` and a `message` payload
* This architecture allows for scaling to multiple domains (alarms, energy, sensors, etc.)

---

Built with precision for industrial edge intelligence ⚙️🔥
