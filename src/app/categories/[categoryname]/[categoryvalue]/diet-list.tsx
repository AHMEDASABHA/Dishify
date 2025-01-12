"use client";
import React, { useEffect } from "react";
import InfiniteRecipesList from "@/components/InfiniteRecipeList";
import { type CategoryValue } from "../../../../types/CategoryPermittedValues";
import { useRecipesByDiet } from "@/lib/query";
import InfiniteScroll from "react-infinite-scroll-component";

function DietList({ valueOfFilter }: { valueOfFilter: CategoryValue<"diet"> }) {
  const { data, fetchNextPage, hasNextPage, isError, isLoading,refetch } =
    useRecipesByDiet(valueOfFilter);

      useEffect(() => {
        refetch();
      }, [refetch]);

  if (isLoading) return <div role="status">Loading...</div>;
  if (isError)
    return (
      <div role="alert">Failed to load recipes. Please try again later.</div>
    );
  if (!data) return <div>No recipes found</div>;

  const allRecipes = data.pages.flatMap((page) => page);

  return (
    <InfiniteScroll
      dataLength={data.pages.reduce((acc, page) => acc + page.length, 0)}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<div>Loading...</div>}
      endMessage={<div>No more recipes to load</div>}
    >
        <InfiniteRecipesList recipes={allRecipes} />
    
    </InfiniteScroll>
  );
}

export default DietList;
