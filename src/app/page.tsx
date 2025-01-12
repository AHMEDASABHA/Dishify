"use client";

import React from "react";
import AllRecipes from "./all-recipes";

export default function Home() {
  return (
    <>
      <h1 className="mt-4 text-center text-3xl font-bold text-gray-800 dark:text-gray-100">
        Welcome to Dishfy, browse and find your favorite recipes here
      </h1>
      <div className="flex min-h-screen px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <AllRecipes />
      </div>
    </>
  );
}
