import { create } from "zustand";

interface AuthState {
  user: {
    name: string;
    email?: string;
  } | null;
  setUser: (user: { name: string; email?: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

	// TenantID string `json:"tenant_id"`
	// MachineID   string `json:"machine_id"`
	// MachineCode string `json:"machine_code"`
	// OperatorID   string `json:"operator_id"`
	// OperatorName string `json:"operator_name"`