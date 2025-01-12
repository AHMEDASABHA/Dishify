import React from "react";
import { CategoryCarousel } from "@/components/Category";
import { cuisines } from "@/types/Cuisine";
import { diets } from "@/types/Diets";
import { mealTypes } from "../../types/MealTypes";

const CategoriesPage = () => {
  return (
    <div className="container mx-auto space-y-12 py-8">
      <h1 className="mb-8 p-2 text-3xl font-bold">Recipe Categories</h1>

      <section>
        <h2 className="mb-4 p-2 text-2xl font-semibold">Cuisines</h2>
        <CategoryCarousel name="cuisine" items={cuisines} />
      </section>

      <section>
        <h2 className="mb-4 p-2 text-2xl font-semibold">Diets</h2>
        <CategoryCarousel name="diet" items={diets} />
      </section>

      <section>
        <h2 className="mb-4 p-2 text-2xl font-semibold">Meal Types</h2>
        <CategoryCarousel name="type" items={mealTypes} />
      </section>
    </div>
  );
};

export default CategoriesPage;
