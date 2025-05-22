import { useEffect, useRef } from "react";
import { useAuthStore } from "../features/Authentication/authStore";
import type { WebSocketEnvelope } from "./envelopeTypes";

export function useWebSocket(onMessage?: (payload: WebSocketEnvelope) => void) {
  const user = useAuthStore((state) => state.user);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!user) return;

    const socket = new WebSocket("ws://localhost:8080/ws");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("✅ WebSocket connected!");
    };

    socket.onmessage = (event) => {
      console.log("📨 Raw WS message:", event.data);
      try {
        const data: WebSocketEnvelope = JSON.parse(event.data);
        console.log("✅ Parsed WS message:", data);

        if (!data.channel || !data.message) {
          console.warn("⚠️ Message missing required fields:", data);
          return;
        }

        onMessage?.(data);
      } catch (err) {
        console.error("❌ Failed to parse message or call onMessage:", err);
      }
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
  }, [user, onMessage]);

  return {
    socket: socketRef.current,
  };
}
