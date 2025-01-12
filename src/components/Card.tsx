import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import onedish from "@assets/images/onedish.png";
import type { RecipeResponse } from "@/types/Recipe";
import { useFavoritesStore } from "@/store/favorites-store";
import Link from "next/link";

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
    <Card className="group overflow-hidden transition-colors">
      <CardHeader className="p-0">
        <div className="relative pt-[56.25%]">
          {recipe.image ? (
            <Image
              className="absolute left-0 top-0 h-full w-full object-cover"
              src={recipe.image || onedish}
              alt={recipe.title}
              fill
              placeholder="empty"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw,33vw"
            />
          ) : (
            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent dark:from-green-300 dark:to-green-700 lg:text-3xl">
              No Image
            </div>
          )}
          <div className="absolute right-4 top-4 flex gap-2">
            {isFavorite ? (
              <Button
                aria-label="Remove from favorites"
                size="icon"
                variant="secondary"
                className="absolute right-0 top-0 rounded-full bg-emerald-300/50 hover:bg-emerald-300/70 dark:bg-green-700/50 dark:hover:bg-green-700/70"
                onClick={() => {
                  setIsFavorite(false);
                  removeRecipeFromFavorites({ ...recipe, isFavorite: false });
                }}
              >
                <Heart className="size-7 fill-green-900/70 dark:fill-white" />
              </Button>
            ) : (
              <Button
                aria-label="Remove from favorites"
                size="icon"
                variant="secondary"
                className="absolute right-0 top-0 rounded-full bg-emerald-300/50 hover:bg-emerald-300/70 dark:bg-green-700/50 dark:hover:bg-green-700/70"
                onClick={() => {
                  setIsFavorite(true);
                  addRecipeToFavorites({ ...recipe, isFavorite: false });
                }}
              >
                <Heart className="size-7" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative p-4">
        <h3 className="mb-4 line-clamp-2 min-h-[3.5rem] text-lg font-semibold">
          {recipe.title}
        </h3>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <Button
          variant="secondary"
          className="w-full whitespace-nowrap"
          asChild
        >
          <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RecipeCard;
