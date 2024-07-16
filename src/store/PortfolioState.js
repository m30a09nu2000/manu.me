import { create } from "zustand";
export const useStore = create((set) => ({
  mode: false,
  setMode: (mode) => set({ mode: mode }),
}));
