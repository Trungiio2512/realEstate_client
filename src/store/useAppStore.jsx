import { TYPE_SIGN_LOGIN } from "@/utils/constants";
import { create } from "zustand";

export const useAppStore = create((set) => ({
  isOpen: false,
  typeSignLogin: TYPE_SIGN_LOGIN.LOGIN,
  setOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setTypeSignLogin: (payload) => set((state) => ({ ...state, typeSignLogin: payload })),
}));
