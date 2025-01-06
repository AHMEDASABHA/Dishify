import type { PaginationStore } from "@/types/PaginationStore";
import { StateCreator } from "zustand";

export const createAllRecipesNumOfPagesSlide: StateCreator<
  PaginationStore,
  [["zustand/immer", never]],
  [],
  PaginationStore
> = (set) => ({
  totalPages: 0,
  setTotalPages: (pages: number) => set({ totalPages: pages }),
});
