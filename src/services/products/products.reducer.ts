import { Product } from "@/models/product";
import { ProductsAction } from "@/services/products/products.actions";

export interface ProductsState {
  loading: boolean;
  products: Product[];
  error: string | null;
  active: Partial<Product> | null;
}

export const productsReducer = (
  state: ProductsState,
  action: ProductsAction
) => {
  const { type, payload } = action;

  switch (type) {
    case "LOADING":
      return {
        ...state,
        loading: payload,
        error: null,
      };
    case "LOADED":
      return {
        ...state,
        loading: false,
        error: null,
        products: payload,
      };
    case "ADD":
      return {
        ...state,
        products: [...state.products, payload],
        active: null,
        error: null,
        loading: false,
      };
    case "UPDATE":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload.id ? payload : product
        ),
        error: null,
        loading: false,
      };
    case "DELETE":
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
        error: null,
        loading: false,
        active: state.active?.id === payload ? null : state.active,
      };
    case "SET_ACTIVE":
      return {
        ...state,
        active: payload,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: payload,
      };
  }

  return state;
};
