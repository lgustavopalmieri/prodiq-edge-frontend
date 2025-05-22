# 📊 Production Monitoring UI Behavior (Frontend)

This document describes the behavior and rules of the **Production Monitoring UI** on the frontend side, focusing on metrics and UI state changes during an order execution.

---

## 📈 Core Metrics

The frontend must display and handle the following production indicators:

- **OEE** (Overall Equipment Effectiveness): composed of the three factors below:

  - **Performance**
  - **Quality**
  - **Availability**

- **Machine Status** (real-time)

- **Production Quantities**:

  - Good Quantity
  - Defected Quantity
  - (Sum of both for the total quantity)

- **Estimated Time to Finish**:

  - Based on standard cycle time and order quantity
  - ⚠️ Only active when an order is started

- **Alerts**:

  - Always active regardless of order status

---

## 🧭 UI Behavior During an Active Order

When a production order is in `running` state:

### 🔒 Setup Form

- The setup section becomes **disabled**
- It is re-enabled **only when the order is finished**

### 🛑 Finish Order Button

- The button is **visible and disabled** while the machine is running
- It becomes **enabled only when the machine status is `stopped`**

### ✅ On Finish Button Click

- The setup form becomes **enabled** again
- Operator must manually declare:

  - **Final good quantity**
  - **Final bad/defected quantity**

### 📋 Optional: Stop Justification

- The operator may provide a reason for machine stops (e.g. downtime tracking, OEE justification)

---

## 🔄 State Conditions Summary

| Condition                      | Setup Form | Finish Button | Estimated Time | Alerts  |
| ------------------------------ | ---------- | ------------- | -------------- | ------- |
| No order running               | Enabled    | Hidden        | Disabled       | Enabled |
| Order running, machine running | Disabled   | Disabled      | Enabled        | Enabled |
| Order running, machine stopped | Disabled   | **Enabled**   | Enabled        | Enabled |
| After order is finished        | Enabled    | Hidden        | Disabled       | Enabled |

---

This behavior ensures consistency across user interaction flows and supports real-time monitoring and traceability of operations.
