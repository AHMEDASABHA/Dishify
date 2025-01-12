import type { SearchResult } from "@/types/ApiTypes";
import type { Cuisine } from "@/types/Cuisine";
import type { Diet } from "@/types/Diets";
import type { MealType } from "@/types/MealTypes";
import { ofetch } from "ofetch";

export const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchRecipesByCuisine = async (cuisine: Cuisine, page: number) => {
  const offset = (page - 1) * 30;
  const response = await ofetch<SearchResult>(BASE_URL, {
    params: {
      apiKey: API_KEY,
      cuisine: cuisine,
      number: 50,
      offset,
    },
  });
  return response.results;
};

export const fetchRecipesByDiet = async (diet: Diet, page: number) => {
  const offset = (page - 1) * 50;
  const response = await ofetch<SearchResult>(BASE_URL, {
    params: {
      apiKey: API_KEY,
      diet: diet,
      number: 50,
      offset,
    },
  });
  return response.results;
};

export const fetchRecipesByMealType = async (type: MealType, page: number) => {
  const offset = (page - 1) * 50;
  const response = await ofetch<SearchResult>(BASE_URL, {
    params: {
      apiKey: API_KEY,
      type: type,
      number: 50,
      offset,
    },
  });
  return response.results;
};
