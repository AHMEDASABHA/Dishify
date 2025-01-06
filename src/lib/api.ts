import { ofetch } from "ofetch";
import { URL } from "url";

export const BASE_ERL = "https://api.spoonacular.com/recipes";
export const SEARCH_BASE_ERL =
  "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error(
    "Spoonacular API key is not defined in environment variables.",
  );
}
// To generalize the function, as when fetch all recipes, search by name,
//  and when create categories as categories is just params in this search
interface SearchParams {
  query: string | undefined;
  [key: string]: string | undefined;
}

// First we use the baseUrl to create the url specific for the search
// Second we add the apiKey to the url
// Third we add the query if it exists
// Fourth we add the params if they exist
// const [key, value] of Object.entries(params) is used to iterate over the params as every param is an object
// of key and value as props contain name and value
// if the value is not undefined, we add it to the url
export const fetchAllRecipes = async (
  queryParams: Record<string, string | undefined>,
) => {
  const allRecipes = [];
  let offset = 0;
  const limit = 50; // Maximum number of results per page

  const response = await ofetch(SEARCH_BASE_ERL, {
    params: {
      ...queryParams,
      apiKey: API_KEY,
      number: limit,
      offset,
    },
  });



  allRecipes.push(...response.results);
  offset += limit;


  return allRecipes;
};
