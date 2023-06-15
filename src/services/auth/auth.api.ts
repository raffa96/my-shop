import { pb } from "@/pocketbase";

export const login = (username: string, password: string) =>
  pb.admins.authWithPassword(username, password);

export const logout = () => pb.authStore.clear();

export const getToken = () => pb.authStore.token;

export const isLoggedIn = () => pb.authStore.isValid;
