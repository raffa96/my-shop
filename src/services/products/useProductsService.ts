import { useReducer } from "react";

import {
  ProductsState,
  productsReducer,
} from "@/services/products/products.reducer";
import * as ProductsAPI from "@/services/products/products.api";
import { Product } from "@/models/product";

export const useProductsService = () => {
  const initialState: ProductsState = {
    loading: false,
    products: [],
    error: null,
    active: null,
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const getProducts = async () => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const result = await ProductsAPI.get();
      const { items: products } = result;
      dispatch({ type: "LOADED", payload: products });
    } catch (error) {
      dispatch({ type: "ERROR", payload: "Product not loaded!" });
    }
  };

  const addProduct = async (product: Partial<Product>) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const result = await ProductsAPI.add(product);
      dispatch({ type: "ADD", payload: result });
    } catch (error) {
      dispatch({ type: "ERROR", payload: "Product not added!" });
    }
  };

  const updateProduct = async (product: Partial<Product>) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const result = await ProductsAPI.update(product);
      dispatch({ type: "UPDATE", payload: result });
    } catch (error) {
      dispatch({ type: "ERROR", payload: "Product not updated!" });
    }
  };

  const setActiveProduct = (product: Product | {}) => {
    dispatch({ type: "SET_ACTIVE", payload: product });
  };

  const resetActiveProduct = () => {
    dispatch({ type: "SET_ACTIVE", payload: null });
  };

  const deleteProduct = async (id: string) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      await ProductsAPI.remove(id);
      dispatch({ type: "DELETE", payload: id });
    } catch (error) {
      dispatch({ type: "ERROR", payload: "Product not deleted!" });
    }
  };

  return {
    state,
    actions: {
      getProducts,
      addProduct,
      updateProduct,
      setActiveProduct,
      resetActiveProduct,
      deleteProduct,
    },
  };
};
