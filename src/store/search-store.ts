import { create } from "zustand";

export interface SearchStore {
  search: string;
  setSearch: (current: string) => void;
}

export const useSearchStore = create<SearchStore>()((set) => ({
  search: "",
  setSearch: (current) => set((state) => ({ ...state, search: current })),
}));
