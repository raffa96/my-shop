import { create } from "zustand";
import * as AuthService from "./auth.api";

export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  error: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  token: AuthService.getToken(),
  isLoggedIn: AuthService.isLoggedIn(),
  error: false,
  login: async (username: string, password: string) => {
    set({ error: false, isLoggedIn: false });
    try {
      await AuthService.login(username, password);
      set({
        token: AuthService.getToken(),
        isLoggedIn: AuthService.isLoggedIn(),
      });
    } catch (error) {
      set({ error: true, isLoggedIn: false });
    }
  },
  logout: () => {
    AuthService.logout();
    set({ token: null, isLoggedIn: false });
  },
}));
