import { create } from "zustand";

interface AuthState {
  token: string | null;
  user: {
    tenantId: string;
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
