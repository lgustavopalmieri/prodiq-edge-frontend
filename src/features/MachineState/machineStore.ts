import { create } from "zustand";

export type MachineStatusType = "RUNNING" | "PAUSED" | "IDLE" | "STOPPED";

interface MachineState {
  machine: {
    tenantId: string;
    machineId: string;
    machineCode: string;
  } | null;
  machineStatus: MachineStatusType | null;
  setMachine: (machine: MachineState["machine"]) => void;
  setMachineStatus: (status: MachineStatusType) => void;
}

export const useMachineStore = create<MachineState>((set) => ({
  machine: null,
  setMachine: (machine) => set({ machine }),
  machineStatus: null,
  setMachineStatus: (machineStatus) => set({ machineStatus }),
}));
