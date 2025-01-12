import type { Recipe, RecipeResponse } from "@/types/Recipe";
import type { IngredientParams, SearchResult } from "@/types/ApiTypes";
import { ofetch } from "ofetch";

export const BASE_URL = "https://api.spoonacular.com/recipes";
export const SEARCH_BASE_URL =
  "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchAllRecipes = async (page: number, pageSize: number = 50) => {
  const offset = (page - 1) * pageSize;
  const response = await ofetch<SearchResult>(SEARCH_BASE_URL, {
    params: {
      apiKey: API_KEY,
      number: pageSize,
      offset,
    },
  });
  return response;
};

export const fetchRecipe = async (id: number) => {
  return await ofetch<Recipe>(
    `${BASE_URL}/${id}/information?apiKey=${API_KEY}`,
  );
};

export const fetchSimilarRecipesIds = async (id: number) => {
  return (
    await ofetch<RecipeResponse[]>(
      `${BASE_URL}/${id}/similar?apiKey=${API_KEY}`,
    )
  ).map((recipe) => recipe.id);
};

export const fetchRecipesByIngredients = async (params: IngredientParams) => {
  const query = new URLSearchParams({
    apiKey: API_KEY!,
    ingredients: params.ingredients.join(","),
    number: params.number?.toString() || "10",
  }).toString();
  return await ofetch<RecipeResponse[]>(
    `${BASE_URL}/findByIngredients?${query}`,
  );
};

export const fetchRecipesByName = async (query: string, page: number) => {
  const offset = (page - 1) * 50;
  const response = await ofetch<SearchResult>(SEARCH_BASE_URL, {
    params: {
      apiKey: API_KEY,
      query,
      number: 50,
      offset,
    },
  });
  return response.results;
};
