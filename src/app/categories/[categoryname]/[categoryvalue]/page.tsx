import {
  categoryPermittedValues,
  type CategoryName,
  type CategoryValue,
} from "@/types/CategoryPermittedValues";
import { notFound } from "next/navigation";
import FilteredRecipesByCategory from "./filtered-recipes";

export async function generateStaticParams() {
  const paths: { categoryname: string; categoryvalue: string }[] = [];

  Object.entries(categoryPermittedValues).forEach(([category, values]) => {
    values.forEach((value) => {
      paths.push({ categoryname: category, categoryvalue: value });
    });
  });

  return paths;
}

interface Params {
  categoryname: CategoryName;
  categoryvalue: CategoryValue<CategoryName>;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { categoryname, categoryvalue } = await params;

  const isValidCategory = Object.keys(categoryPermittedValues).includes(
    categoryname,
  );

  const isValidValue =
    isValidCategory &&
    (categoryPermittedValues[categoryname] as readonly string[]).includes(
      categoryvalue,
    );

  if (!isValidCategory || !isValidValue) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <header className="flex items-center justify-between py-4">
          <div>
            <h1 className="text-4xl font-bold capitalize">
              {categoryname.replace(/-/g, " ")}
            </h1>
            <p className="mt-2 text-lg">
              Explore recipes in the {categoryvalue.replace(/-/g, " ")} {" "}category.
            </p>
          </div>
        </header>
        <main className="rounded-lg bg-gray-100 p-6 shadow-md dark:bg-gray-800">
          <FilteredRecipesByCategory
            valueOfFilter={categoryvalue}
            filter={categoryname}
          />
        </main>
      </div>
    </div>
  );
}
