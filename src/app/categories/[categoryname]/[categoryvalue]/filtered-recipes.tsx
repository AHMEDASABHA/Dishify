"use client";
import { CategoryName } from "../../../../types/CategoryPermittedValues";
import MealTypeList from "./meal-type-list";
import DietList from "./diet-list";
import CuisineList from "./cuisine-list";

function FilteredRecipesByCategory({
  filter,
  valueOfFilter,
}: {
  filter: CategoryName;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valueOfFilter: any;
}) {
  switch (filter) {
    case "cuisine":
      return <CuisineList valueOfFilter={valueOfFilter} />;
    case "diet":
      return <DietList valueOfFilter={valueOfFilter} />;
    case "type":
      return <MealTypeList valueOfFilter={valueOfFilter} />;
  }
}

export default FilteredRecipesByCategory;
