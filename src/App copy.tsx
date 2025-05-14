import Header from "./features/Header/Header";
import LayoutTemplate from "./features/LayoutTemplate";
import OeeSession from "./features/OeeSession/OeeSession";
import OperatingSession from "./features/OperatingSession/OperatingSession";
import AlertSession from "./features/AlertSession/AlertSession";
import MachineStatus from "./features/AlertSession/MachineStatus";

function App() {
  // In real life this would come from backend or context
  const currentAlert = {
    status: "critical", // or "warning" | "critical"
    message: "Overheating on Machine 02", // like: "Overheating on Machine 02"
  };

  return (
    <LayoutTemplate>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "7vh",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#1e293b",
            gap: "2rem",
            width: "100%",
          }}
        >
          <span
            style={{ color: "#f8fafb", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            STAMP MACHINE
          </span>
          <MachineStatus status={"paused"} />
        </div>

        <AlertSession
          status={currentAlert.status as any}
          message={currentAlert.message}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "85%",
          gap: "2rem",
        }}
      >
        <OeeSession />
        <OperatingSession />
      </div>
    </LayoutTemplate>
  );
}

export default App;
