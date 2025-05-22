# 🏭 Operation Execution Tracking — Frontend UI Specification

This document describes the full UI behavior and state flow for managing the lifecycle of a production `ORDER/OPERATION`, from setup to finalization. This is part of the real-time industrial frontend built with **React, Zustand, and Tailwind**.

---

## ⚙️ Initial State — No Operation Started

- ✅ If the machine **is not operating** and has **no active configuration**, show a **“Configure Operation”** button.
- 🪄 When clicked:
  - The configuration form is displayed (order, operation, product, cycle time, quantities, etc).
  - The “Configure Operation” button becomes **“Cancel Configuration”**.
  - A new button appears below the form: **“Send Configuration”**.
- ⚠️ “Send Configuration” is **disabled** until all required fields are filled.
- ✅ When "Send Configuration" is clicked and successfully confirmed from the backend:
  - “Send Configuration” becomes **disabled**.
  - A new button appears as **“SET”** to confirm readiness.

---

## 🟢 After SET — Starting Production

- ✅ Clicking **“SET”** starts a **timer counter** for the `ORDER/OPERATION`.
- ✅ The **“SET”** button changes its label to **“PAUSE”**.
- 🧾 All parameter cards (operation, product, quantities) are now filled and visible.
- 🚨 A **“Start Machine”** button now appears below the cards — **glowing**.
- ✅ “Start Machine”:
  - Sends signal to backend to begin production.
  - Is disabled **until an operation/order is SET**.
  - When clicked, becomes **“PAUSE Machine”**.
  - A **“Stop Machine”** button appears beside it — disabled until machine starts.

---

## ⏸ PAUSED State Behavior

- ✅ If machine is **paused**:
  - “Stop Machine” remains **enabled**.
  - The `ORDER/OPERATION` button (now showing “PAUSE”) glows, encouraging interaction.
- ✅ If machine is **stopped**:
  - A new button appears beside `ORDER/OPERATION`: **“Finish Order”**.

---

## ✅ Finish Flow

- 🧾 Clicking **“Finish Order”** opens a **modal** with:
  - Defected quantity input
  - Good quantity input
  - Total summary (read-only from backend)
- ✨ Modal includes:
  - **Confirm** and **Cancel** buttons
  - **If Confirmed**:
    - All params are reset
    - Timer is cleared
    - UI returns to initial state
  - **If Cancelled**:
    - The current operation/order state is preserved

> 🔁 The **timer counter** is only reset when an operation is **explicitly finished** and confirmed.

---

## 📌 Notes

- All interactions are reflected in Zustand state.
- WebSocket sync is required for backend confirmation before changing button states.
- Button and form states should be managed via a central UI state slice to keep consistent.

---

## 🧪 TODO Ideas for Enhancements

- Visual indicators for timer state (running, paused, completed)
- Real-time cycle progress indicator
- Block UI actions when backend connection is lost
- Validation and feedback for manual quantities
