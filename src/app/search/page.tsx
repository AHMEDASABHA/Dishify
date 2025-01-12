"use client";
import React, { useEffect, useState } from "react";
import InfiniteRecipesList from "@/components/InfiniteRecipeList";
import RecipesList from "@/components/RecipesList";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRecipesByIngredients, useRecipesByName } from "@/lib/query";
import { Filter, Search } from "lucide-react";
import AllRecipes from "../all-recipes";
import InfiniteScroll from "react-infinite-scroll-component";

type FilterType = "byName" | "byIngredient";

function Page() {
  const [filter, setFilter] = useState<FilterType>("byName");
  const [inputValue, setInputValue] = useState<string>(""); // Track input value
  const [searchQuery, setSearchQuery] = useState<string>(""); // Trigger searches

  const handleSearch = () => {
    const query = inputValue.trim();
    if (query !== searchQuery) {
      setSearchQuery(query);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="mt-3 text-center text-3xl font-bold">
        Here you can search to find your desired recipe
      </h1>
      <div className="mx-5 space-y-2">
        <Label htmlFor="searchbar">
          {filter === "byName"
            ? "Search the recipe by its name"
            : "Search the recipe by its ingredients, type them separated by comma ','"}
        </Label>
        <div className="relative">
          <Input
            id="searchbar"
            className="peer pe-9 ps-9"
            placeholder="Search..."
            type="search"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
            <Search size={16} strokeWidth={2} />
          </div>
          <button
            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="filter search"
            onClick={() => {
              setFilter((prevFilter) =>
                prevFilter === "byName" ? "byIngredient" : "byName",
              );
              setSearchQuery("");
              setInputValue("");
            }}
          >
            <Filter size={16} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
      {searchQuery ? (
        filter === "byName" ? (
          <GetResultsByName query={searchQuery} />
        ) : (
          <GetResultsByIngredient query={searchQuery} />
        )
      ) : (
        <div className="flex min-h-screen px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <AllRecipes />
        </div>
      )}
    </div>
  );
}

const GetResultsByName = ({ query }: { query: string }) => {
  const { data, fetchNextPage, hasNextPage, isError, isLoading, refetch } =
    useRecipesByName(query);

  useEffect(() => {
    refetch();
  }, [refetch, query]);

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return <div>Failed to load recipes. Please try again later.</div>;
  if (!data) return <div>No recipes found</div>;

  const allRecipes = data.pages.flatMap((page) => page);

  return (
    <div className="flex min-h-screen px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <InfiniteScroll
        dataLength={data.pages.reduce((acc, page) => acc + page.length, 0)}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<div>Loading...</div>}
        endMessage={<div>No more recipes to load</div>}
      >
        <InfiniteRecipesList recipes={allRecipes} />
      </InfiniteScroll>
    </div>
  );
};

const GetResultsByIngredient = ({ query }: { query: string }) => {
  const ingredients = query.split(",").map((ingredient) => ingredient.trim());
  const { data, isLoading, isError, refetch } =
    useRecipesByIngredients(ingredients);

  useEffect(() => {
    refetch();
  }, [refetch, query]);

  if (isLoading) return <div>Loading recipes...</div>;
  if (isError)
    return <div>Failed to load recipes. Please try again later.</div>;
  if (!data || data.length === 0) return <div>No recipes found</div>;

  return (
    <div className="flex min-h-screen px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <RecipesList recipes={data} />
    </div>
  );
};

export default Page;
