import type { Recipe } from "./Recipe";

export interface FavoritesSlice {
  favorites: Recipe[]
  addRecipeToFavorites: (recipe: Recipe) => void;
  removeRecipeFromFavorites: (recipe: Recipe) => void;
}