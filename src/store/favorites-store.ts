import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import type { FavoritesSlice } from "@/types/FavoritesStore";

export const useFavoritesStore = create<FavoritesSlice>()(
  persist(
    immer((set) => ({
      favorites: [],
      addRecipeToFavorites: (recipe) =>
        set((state) => {
          state.favorites.push(recipe);
        }),
      removeRecipeFromFavorites: (recipe) =>
        set((state) => {
          state.favorites = state.favorites.filter((r) => r.id !== recipe.id);
        }),
    })),
    {
      name: "favorites-storage",
    },
  ),
);
