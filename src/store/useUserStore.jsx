import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useUserStore = create(
  persist(
    // eslint-disable-next-line no-unused-vars
    (set, get) => ({
      token: null,
      current: null,
      loggedIn: false,
      setToken: (payload) => {
        set((state) => ({ ...state, token: payload }));
      },
      setUser: (payload) => {
        set((state) => ({ ...state, current: payload }));
      },
      setLoggedIn: (payload) => {
        set((state) => ({ ...state, loggedIn: payload }));
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => key === "token" || key === "current" || key === "loggedIn"
          )
        ),
    }
  )
);
