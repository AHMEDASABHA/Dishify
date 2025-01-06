import type { Store } from "@/types/Store";
import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createAllRecipesNumOfPagesSlide } from "./all-recipes-num-pages-slide";



export const useStore = create<Store>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createAllRecipesNumOfPagesSlide(...a),
        })),
      ),
      {
        name: "local-storage",
      },
    ),
  ),
);
