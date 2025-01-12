import {
  useRecipesByCuisine,
  useRecipesByDiet,
  useRecipesByMealType,
} from "@/lib/query";
import type {
  CategoryName,
  CategoryValue,
} from "@/types/CategoryPermittedValues";

export function useCategoryList(
  filter: CategoryName,
  valueOfFilter:
    | CategoryValue<"cuisine">
    | CategoryValue<"diet">
    | CategoryValue<"type">,
) {
  const {
    data: dataCuisine,
    fetchNextPage: fetchNextPageCuisine,
    hasNextPage: hasNextPageCuisine,
    isFetchingNextPage: isFetchingNextPageCuisine,
  } = useRecipesByCuisine(valueOfFilter as CategoryValue<"cuisine">);

  const {
    data: dataDiet,
    fetchNextPage: fetchNextPageDiet,
    hasNextPage: hasNextPageDiet,
    isFetchingNextPage: isFetchingNextPageDiet,
  } = useRecipesByDiet(valueOfFilter as CategoryValue<"diet">);

  const {
    data: dataType,
    fetchNextPage: fetchNextPageType,
    hasNextPage: hasNextPageType,
    isFetchingNextPage: isFetchingNextPageType,
  } = useRecipesByMealType(valueOfFilter as CategoryValue<"type">);

  // Ensure the return value structure is consistent
  if (filter === "cuisine") {
    return {
      data: dataCuisine,
      fetchNextPage: fetchNextPageCuisine,
      hasNextPage: hasNextPageCuisine,
      isFetchingNextPage: isFetchingNextPageCuisine,
    };
  } else if (filter === "diet") {
    return {
      data: dataDiet,
      fetchNextPage: fetchNextPageDiet,
      hasNextPage: hasNextPageDiet,
      isFetchingNextPage: isFetchingNextPageDiet,
    };
  } else if (filter === "type") {
    return {
      data: dataType,
      fetchNextPage: fetchNextPageType,
      hasNextPage: hasNextPageType,
      isFetchingNextPage: isFetchingNextPageType,
    };
  }

  // // Default return if no matching filter
  // return {
  //   data: [],
  //   fetchNextPage: null,
  //   hasNextPage: false,
  //   isFetchingNextPage: false,
  // };
}
