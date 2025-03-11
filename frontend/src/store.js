import { create } from "zustand";

const useDashboardStore = create((set) => ({
  stats: {
    users: 0,
    orders: 0,
    revenue: 0,
    growth: 0,
  },
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  updateStats: () => {
    set((state) => ({
      stats: {
        users: state.stats.users + Math.floor(Math.random() * 10),
        orders: state.stats.orders + Math.floor(Math.random() * 10),
        revenue: state.stats.revenue + Math.floor(Math.random() * 200),
        growth: state.stats.growth + Math.random() * 5,
      },
    }));
  },
}));

export default useDashboardStore;
