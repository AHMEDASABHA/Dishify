import type { RecipeResponse } from "@/types/Recipe";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { useFavoritesStore } from "@/store/favorites-store";

interface RecipesCardProps {
  recipe: RecipeResponse;
}
function RecipeCard({
  recipe,
  isFavoriteProp,
}: RecipesCardProps & { isFavoriteProp: boolean }) {
  const [isFavorite, setIsFavorite] = useState(isFavoriteProp);
  const { addRecipeToFavorites, removeRecipeFromFavorites } =
    useFavoritesStore();

  return (
    <Card>
      <CardContent className="relative h-80">
        {recipe.image ? (
          <Image
            className="absolute left-0 top-0 h-full w-full object-cover"
            src={recipe.image}
            alt={recipe.title}
            fill
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw,33vw"
          />
        ) : (
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent dark:from-green-300 dark:to-green-700 lg:text-3xl">
            No Image
          </div>
        )}
        <div className="absolute bottom-0 left-0 flex h-14 w-full items-center justify-between bg-emerald-500/50 px-2 py-2">
          <p className="text-pretty text-lg font-semibold capitalize text-white">
            {recipe.title}
          </p>
          {isFavorite ? (
            <Button
              variant="outline"
              aria-label="Remove from favorites"
              className="flex size-7 items-center justify-center bg-green-700 p-0 hover:bg-green-800"
              onClick={() => {
                setIsFavorite(false);
                removeRecipeFromFavorites({ ...recipe, isFavorite: false });
              }}
            >
              <Star className="size-7" fill="white" />
            </Button>
          ) : (
            <Button
              variant="ghost"
              aria-label="Remove from favorites"
              className="flex size-7 items-center justify-center p-0 hover:bg-green-800"
              onClick={() => {
                setIsFavorite(true);
                addRecipeToFavorites({ ...recipe, isFavorite: false });
              }}
            >
              <Star className="size-7" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;
