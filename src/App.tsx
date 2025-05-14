import Header from "./features/Header/Header";
import LayoutTemplate from "./components/Layout/LayoutTemplate";
import OeeSession from "./features/OeeSession/OeeSession";
import OperatingSession from "./features/OperatingSession/OperatingSession";
import AlertSession from "./features/AlertSession/AlertSession";
import MachineStatus from "./features/AlertSession/MachineStatus";
import { useAuthStore } from "./features/Authentication/authStore";
import { useEffect } from "react";

function App() {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    setUser({ name: "John Doe", email: "john@example.com" });
  }, [setUser]);
  // In real life this would come from backend or context
  const currentAlert = {
    status: "critical", // or "warning" | "critical"
    message: "Overheating on Machine 02", // like: "Overheating on Machine 02"
  };

  return (
    <LayoutTemplate
      header={<Header />}
      children={<div className="h-full">a</div>}
      machineState={<div className="h-full">STAMP</div>}
    />
  );
}

export default App;
