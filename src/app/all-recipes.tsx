"use client";
import InfiniteRecipesList from "@/components/InfiniteRecipeList";
import { useRecipes } from "@/lib/query";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function AllRecipes() {
  const { data, isError, isLoading, fetchNextPage, hasNextPage } = useRecipes();

  if (isLoading) return <div role="status">Loading...</div>;
  if (isError)
    return (
      <div role="alert">Failed to load recipes. Please try again later.</div>
    );
  if (!data) return <div>No recipes found</div>;

  const allRecipes = data.pages.flatMap((page) => page.results);

  return (
    <InfiniteScroll
      dataLength={data.pages.reduce(
        (acc, page) => acc + page.results.length,
        0,
      )}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<div>Loading...</div>}
      endMessage={<div>No more recipes to load</div>}
    >
      <InfiniteRecipesList recipes={allRecipes} />
    </InfiniteScroll>
  );
}

export default React.memo(AllRecipes);
