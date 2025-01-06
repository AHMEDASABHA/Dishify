export interface SingleEquipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export type Equipment = Partial<SingleEquipment>;
