"use client";
import { RecipeDetails } from "@/components/RecipeDetails";
import { useRecipe } from "@/lib/query";
import React from "react";

function Content({ id }: { id: string }) {
  const { data, isLoading } = useRecipe(parseInt(id));

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No Data can found</div>;
  return (
    <div className="size-full py-8">
      <RecipeDetails recipe={data} />
    </div>
  );
}

export default Content;
