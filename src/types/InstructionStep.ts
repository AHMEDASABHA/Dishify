import type { Ingredient } from "./Ingredient";

export interface SingleInstructionStep {
  number: number;
  step: string;
  ingredients: Ingredient[];
  equipment: string[];
}

export type InstructionStep = Partial<SingleInstructionStep>;

export type SingleInstruction = {
  steps: InstructionStep[];
  name: string;
};

export type Instruction = Partial<SingleInstruction>;
