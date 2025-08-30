import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,
        loading: true, // wait until Firebase confirms
        setUser: (user) => set({ user, loading: false }),
        logout: () => set({ user: null, loading: false }),
      }),
      { name: "user-storage" } // key in localStorage
    ),
    { name: "UserStore" } // visible in Redux/Zustand DevTools
  )
);

export default useUserStore;
