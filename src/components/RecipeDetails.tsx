import Image from "next/image";
import DOMPurify from "dompurify";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Recipe } from "@/types/Recipe";
import onedish from "@assets/images/onedish.png";
interface RecipeDetailsProps {
  recipe: Recipe;
  isModal?: boolean;
}
// recipe.image || "@assets/images/onedish.png"
export function RecipeDetails({ recipe, isModal = false }: RecipeDetailsProps) {
  if (!recipe) return null;
  const sanitizedHTML = DOMPurify.sanitize(recipe.summary || "");

  return (
    <ScrollArea className={isModal ? "h-[calc(100vh-8rem)]" : ""}>
      <div className="mx-6 space-y-6">
        <div className="relative h-64 md:h-80">
          <Image
            src={recipe.image || onedish}
            alt={recipe.title || "Recipe image"}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{recipe.title}</h1>
          <div className="text-muted-foreground">
            <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              <span>{recipe.readyInMinutes} mins</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Ingredients</h2>
          <ul className="list-inside list-disc space-y-1">
            {recipe.extendedIngredients?.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Instructions</h2>
          <ol className="list-inside list-decimal space-y-2">
            {recipe.analyzedInstructions?.[0]?.steps?.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
          </ol>
        </div>
        {recipe.sourceUrl && (
          <Button asChild>
            <a
              href={recipe.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Original Recipe
            </a>
          </Button>
        )}
      </div>
    </ScrollArea>
  );
}
