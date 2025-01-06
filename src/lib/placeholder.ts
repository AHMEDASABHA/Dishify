export const fetchRecipes = async ({ query, ...params }: SearchParams) => {
  const url = new URL(`${SEARCH_BASE_ERL}/complexSearch`);
  url.searchParams.append("apiKey", API_KEY);

  if (query) {
    url.searchParams.append("query", query);
  }
  for (const [key, value] of Object.entries(params)) {
    if (!!value) {
      url.searchParams.append(key, value.toString());
    }
  }
  await ofetch(url.toString(), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return ofetch(url);
};