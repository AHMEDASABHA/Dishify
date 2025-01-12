// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const mealTypes = [
  "main course",
  "side dish",
  "dessert",
  "appetizer",
  "salad",
  "bread",
  "breakfast",
  "soup",
  "beverage",
  "sauce",
  "marinade",
  "fingerfood",
  "snack",
  "drink",
] as const;

// Create a type that represents the union of the meal type names
export type MealType = (typeof mealTypes)[number];
