import Header from "./features/Header/Header";
import LayoutTemplate from "./components/Layout/LayoutTemplate";
import { useAuthStore } from "./features/Authentication/authStore";
import { useEffect } from "react";
import MachineState from "./features/MachineState/MachineState";
import Metrics from "./features/Metrics/Metrics";
import Production from "./features/Production/Production";
import Login from "./features/Authentication/Login";

function App() {
  const user = useAuthStore((state) => state.user?.operatorName);

  useEffect(() => {
    if (!user) return;
    const socket = new WebSocket("ws://localhost:8080/ws");

    socket.onopen = () => {
      console.log("✅ WebSocket connected!");
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
    };

    socket.onerror = (error) => {
      console.error("❌ WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("🔌 WebSocket disconnected.");
    };

    return () => {
      socket.close();
    };
  }, [user]);

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
