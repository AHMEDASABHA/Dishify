import type { RecipeResponse } from "./Recipe";

export interface SearchResult {
  results: RecipeResponse[],
  offset: number,
  number: number,
  totalResults: number,
}