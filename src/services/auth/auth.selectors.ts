import { AuthState } from "./useAuth";

export const selectAuthToken = (state: AuthState) => state.token;
export const selectIsLoggedIn = (state: AuthState) => state.isLoggedIn;
export const selectHasError = (state: AuthState) => state.error;
