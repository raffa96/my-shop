import { Product } from "@/models/product";

export type LoadingAction = {
  type: "LOADING";
  payload: boolean;
};
export type LoadedAction = {
  type: "LOADED";
  payload: Product[];
};
export type AddAction = {
  type: "ADD";
  payload: Product;
};
export type UpdateAction = {
  type: "UPDATE";
  payload: Product;
};
export type DeleteAction = {
  type: "DELETE";
  payload: string;
};
export type SetActiveAction = {
  type: "SET_ACTIVE";
  payload: Partial<Product> | null;
};
export type ErrorAction = {
  type: "ERROR";
  payload: string;
};

export type ProductsAction =
  | LoadingAction
  | LoadedAction
  | AddAction
  | UpdateAction
  | DeleteAction
  | SetActiveAction
  | ErrorAction;
