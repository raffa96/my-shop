import { create } from "zustand";

export interface CartPanelState {
  isOpen: boolean;
  toggle: () => void;
  openOverlay: () => void;
  closeOverlay: () => void;
}

export const useCartPanel = create<CartPanelState>((set, get) => ({
  isOpen: false,
  toggle: () => set({ isOpen: !get().isOpen }),
  openOverlay: () => set({ isOpen: true }),
  closeOverlay: () => set({ isOpen: false }),
}));
