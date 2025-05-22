import type { MachineStatus } from "../features/MachineState/machineStore";
import type { OperationExecutionTracking } from "../features/Production/ProductionSetup/operationExecutionTrackingStore";

export type WebSocketEnvelope =
  | {
      channel: "status";
      message: {
        payload: MachineStatus;
        source: string;
        topic: string;
      };
    }
  | {
      channel: "operation";
      message: {
        payload: OperationExecutionTracking;
        source: string;
        topic: string;
      };
    };
