import { create } from "zustand";

export type OperationMode = "count" | "in-out";
export type ExecutionStatus =
  | "started"
  | "paused"
  | "resumed"
  | "finished"
  | "canceled"
  | "error";

export interface OperationExecutionTracking {
  id: string;
  tenant_id: string;
  machine_id: string;
  machine_code: string;
  operation_id: string;
  operation_code: string;
  order_id: string;
  order_code: string;
  product_id: string;
  product_code: string;
  order_quantity: number;
  standard_cycle: number;
  quantity_per_cycle: number;
  mode: OperationMode;
  status: ExecutionStatus;
  timestamp: string; // ISO 8601, comes from Go time.Time
  operator_id: string;
  operator_name: string;
}

interface OperationExecutionTrackingState {
  current: OperationExecutionTracking | null;
  setCurrent: (op: OperationExecutionTracking) => void;
}

export const useOperationExecutionTrackingStore =
  create<OperationExecutionTrackingState>((set) => ({
    current: null,
    setCurrent: (current) => set({ current }),
  }));
