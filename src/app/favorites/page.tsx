"use client";
import RecipesList from "@/components/RecipesList";
import { useFavoritesStore } from "@/store/favorites-store";
import React from "react";
import { RecipeResponse } from "../../types/Recipe";

function Page() {
  const { favorites } = useFavoritesStore();

  const recipesList = favorites.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
    } as RecipeResponse;
  });
  return (
    <>
      <h1 className="mt-4 text-center text-3xl font-bold text-gray-800 dark:text-gray-100">
        Your favorite recipes
      </h1>
      <div className="flex min-h-screen items-start px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <RecipesList recipes={recipesList} />
      </div>
    </>
  );
}

export default Page;
