import type { PaginationSlice } from "@/types/PaginationStore";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";


export const usePaginationStore = create<PaginationSlice>()(
  persist(
    immer((set) => ({
      totalPages: 0,
      setTotalPages: (pages) => set({ totalPages: pages }),
    })),
    {
      name: "pagination-storage",
    },
  ),
);
