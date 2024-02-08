import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useUserStore = create(
  persist(
    // eslint-disable-next-line no-unused-vars
    (set, get) => ({
      token: null,
      current: null,
      loggedIn: false,
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => key === "token" || key === "current")
        ),
    }
  )
);
