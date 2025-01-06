export interface SingleIngredient {
  name: string;
  amount: number;
  unit: string;
  aisle: string;
  image: string;
  original: string;
  originalName: string;
  meta: string[];
  measures: {
    metric: {
      amount: number;
      unitLong: string;
      unitShort: string;
    };
    us: {
      amount: number;
      unitLong: string;
      unitShort: string;
    };
  };
}

export type Ingredient = Partial<SingleIngredient>;
