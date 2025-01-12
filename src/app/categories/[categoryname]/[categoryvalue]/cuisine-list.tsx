"use client";
import React, { useEffect } from "react";
import InfiniteRecipesList from "@/components/InfiniteRecipeList";
import { type CategoryValue } from "../../../../types/CategoryPermittedValues";
import { useRecipesByCuisine } from "@/lib/query";
import InfiniteScroll from "react-infinite-scroll-component";

function CuisineList({
  valueOfFilter,
}: {
  valueOfFilter: CategoryValue<"cuisine">;
}) {
  const { data, fetchNextPage, hasNextPage, isError, isLoading, refetch } =
    useRecipesByCuisine(valueOfFilter);

  useEffect(() => {
    refetch();
  }, [refetch, valueOfFilter]);

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

export default CuisineList;