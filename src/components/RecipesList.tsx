import type { RecipeResponse } from "@/types/Recipe";
import React from "react";
import RecipeCard from "./Card";
import { useFavoritesStore } from "@/store/favorites-store";

interface RecipesListProps {
  recipes: RecipeResponse[];
}

function RecipesList({ recipes }: RecipesListProps) {
  const { favorites } = useFavoritesStore();

  const recipesList = recipes.filter((recipe) => {
    return recipe.title && recipe.image;
  });

  const isItInFavorites = (recipe: RecipeResponse) => {
    return favorites.some((fav) => fav.id === recipe.id);
  };

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recipesList.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavoriteProp={isItInFavorites(recipe)}
          />
        ))}
      </div>
    </>
  );
}

export default RecipesList;
