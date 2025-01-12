import type { Ingredient } from "./Ingredient";
import type { Instruction } from "./InstructionStep";

interface SingleRecipe extends RecipeResponse {
  id: number;
  title: string;
  summary: string;
  isFavorite?: boolean;
  image: string;
  servings: number;
  readyInMinutes: number;
  cookingMinutes: number;
  preparationMinutes: number;
  sourceUrl: string;
  dishTypes: string[];
  cuisines: string[];
  extendedIngredients: Ingredient[];
  analyzedInstructions: Instruction[];
  similarRecipes: Recipe[];
}
export type Recipe = Partial<SingleRecipe>;

export interface RecipeResponse {
  id: number;
  title: string;
  image?: string;
}
