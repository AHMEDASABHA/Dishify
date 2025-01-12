import {
  useQuery,
  useQueries,
  keepPreviousData,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  fetchAllRecipes,
  fetchRecipe,
  fetchRecipesByIngredients,
  fetchRecipesByName,
} from "./api";
import {
  fetchRecipesByCuisine,
  fetchRecipesByDiet,
  fetchRecipesByMealType,
} from "./categories-api";
import type { CategoryValue } from "@/types/CategoryPermittedValues";

export function useRecipes() {
  return useInfiniteQuery({
    queryKey: ["recipes"],
    queryFn: ({ pageParam }) => fetchAllRecipes(pageParam, 50),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.results.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
}

export function useRecipe(id: number) {
  return useQuery({
    queryKey: ["recipe", { id }],
    queryFn: () => fetchRecipe(id),
    placeholderData: keepPreviousData,
  });
}

export function useSimilarRecipes(ids: (number | undefined)[] | undefined) {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["similar-recipe", { id }],
        queryFn: () => fetchRecipe(id!),
      };
    }),
  });
}

export function useRecipesByCuisine(cuisine: CategoryValue<"cuisine">) {
  return useInfiniteQuery({
    queryKey: ["recipes-cuisine"],
    queryFn: ({ pageParam }) => fetchRecipesByCuisine(cuisine, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
}

export function useRecipesByDiet(diet: CategoryValue<"diet">) {
  return useInfiniteQuery({
    queryKey: ["recipes-diet"],
    queryFn: ({ pageParam }) => fetchRecipesByDiet(diet, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
}

export function useRecipesByMealType(mealType: CategoryValue<"type">) {
  return useInfiniteQuery({
    queryKey: ["recipes-meal-type"],
    queryFn: ({ pageParam }) => fetchRecipesByMealType(mealType, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
}

export function useRecipesByName(name: string) {
  return useInfiniteQuery({
    queryKey: ["recipes-search"],
    queryFn: ({ pageParam }) => fetchRecipesByName(name, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
}

export function useRecipesByIngredients(ingredients: string[]) {
  return useQuery({
    queryKey: ["recipes-by-ingredients", { ingredients }],
    queryFn: () => fetchRecipesByIngredients({ ingredients }),
    placeholderData: keepPreviousData,
  });
}
