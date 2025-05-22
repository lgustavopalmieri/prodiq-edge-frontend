import Header from "./features/Header/Header";
import LayoutTemplate from "./components/Layout/LayoutTemplate";
import { useAuthStore } from "./features/Authentication/authStore";
import MachineState from "./features/MachineState/MachineState";
import Metrics from "./features/Metrics/Metrics";
import Production from "./features/Production/Production";
import Login from "./features/Authentication/Login";
import { useWebSocket } from "./hooks/useWebSocket";
import { useMachineStore } from "./features/MachineState/machineStore";
import { useOperationExecutionTrackingStore } from "./features/Production/ProductionSetup/operationExecutionTrackingStore";

function App() {
  const user = useAuthStore((state) => state.user?.operatorName);
  const setMachineStatus = useMachineStore((state) => state.setMachineStatus);
  const setCurrentOperation = useOperationExecutionTrackingStore(
    (state) => state.setCurrent
  );

  useWebSocket((data) => {
    switch (data.channel) {
      case "status":
        console.log("🟢 STATUS:", data.message.payload.status);
        setMachineStatus(data.message.payload.status);
        break;
      case "operation":
        console.log("🔧 OPERATION:", data.message.payload);
        setCurrentOperation(data.message.payload);
        break;
      default:
        console.warn("❓ Unknown channel");
    }
  });

  if (!user) {
    return <Login />;
  }

  return (
    <LayoutTemplate
      header={<Header />}
      machineState={<MachineState />}
      children={
        <div className="flex h-full w-full gap-4">
          <Metrics />
          <Production />
        </div>
      }
    />
  );
}

export default App;
