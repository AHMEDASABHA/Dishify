import type { Ingredient } from "./Ingredient";
import type { InstructionStep } from "./InstructionStep";

interface SingleRecipe {
  id: number;
  title: string;
  summary: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  cookingMinutes: number;
  preparationMinutes: number;
  sourceUrl: string;
  dishTypes: string[];
  cuisines: string[];
  extendedIngredients: Ingredient[];
  analyzedInstructions: InstructionStep[];
}
export type Recipe = Partial<SingleRecipe>;

export interface RecipeResponse {
  id: number;
  title: string;
  image: string;
}
