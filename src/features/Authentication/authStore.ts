import { create } from "zustand";

interface AuthState {
  token: string | null;
  user: {
    tenantId: string;
    machineId: string;
    machineCode: string;
    operatorId: string;
    operatorName: string;
  } | null;
  setAuth: (token: string, user: AuthState["user"]) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  setAuth: (token, user) => set({ token, user }),
  logout: () => set({ token: null, user: null }),
}));

// TenantID string `json:"tenant_id"`
// MachineID   string `json:"machine_id"`
// MachineCode string `json:"machine_code"`
// OperatorID   string `json:"operator_id"`
// OperatorName string `json:"operator_name"`
