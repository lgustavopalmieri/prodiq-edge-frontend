import Header from "./features/Header/Header";
import LayoutTemplate from "./components/Layout/LayoutTemplate";
import { useAuthStore } from "./features/Authentication/authStore";
import { useEffect } from "react";
import MachineState from "./features/MachineState/MachineState";

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
      children={<div>children</div>}
      machineState={<MachineState />}
    />
  );
}

export default App;
