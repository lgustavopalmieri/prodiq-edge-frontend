import Header from "./features/Header/Header";
import LayoutTemplate from "./components/Layout/LayoutTemplate";
import { useAuthStore } from "./features/Authentication/authStore";
import { useEffect } from "react";
import MachineState from "./features/MachineState/MachineState";
import OeeSession from "./features/OeeSession/OeeSession";
import OperatingSession from "./features/OperatingSession/OperatingSession";
import Metrics from "./features/Metrics/Metrics";
import Production from "./features/Production/Production";

function App() {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    setUser({ name: "John Doe", email: "john@example.com" });
  }, [setUser]);

  return (
    <LayoutTemplate
      header={<Header />}
      machineState={<MachineState />}
      children={
        <div className="flex h-full w-full gap-4">
          <Metrics />
          <Production />
        </div>
        //   style={{
        //     display: "flex",
        //     justifyContent: "space-between",
        //     height: "100%",
        //     gap: "2rem",
        //   }}
        // >
        //   <OeeSession />
        //   <OperatingSession />
        // </div>
      }
    />
  );
}

export default App;
