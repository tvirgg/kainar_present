import React from "react";

export type Product = {
  id: string;
  name: string;
  tu?: string;
  desc?: string;
  synonyms?: string;
  cas?: string;
  qualification?: string;
  formula?: string;
  full_desc?: string;
  add_desc?: string[];
  appearance?: string;
  storage_conditions?: string;
  img_path: string;
  weights?: { [key: string]: number }; // Добавленный тип для weights
  common_amount?: number; // Добавленный тип для common_amount
};

export interface ProductListProps {
  products: Product[];
}
