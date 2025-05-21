import Header from "./features/Header/Header";
import LayoutTemplate from "./components/Layout/LayoutTemplate";
import { useAuthStore } from "./features/Authentication/authStore";
import { useEffect } from "react";
import MachineState from "./features/MachineState/MachineState";
import Metrics from "./features/Metrics/Metrics";
import Production from "./features/Production/Production";

function App() {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    setUser({ name: "John Doe", email: "john@example.com" });
  }, [setUser]);

  useEffect(() => {
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
  }, []);

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
