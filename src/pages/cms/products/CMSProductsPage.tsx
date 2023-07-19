import { useReducer } from "react";

import { get } from "@/services/products/products.api";
import {
  ProductsState,
  productsReducer,
} from "@/services/products/products.reducer";

export const CMSProductsPage = () => {
  const initialState: ProductsState = {
    loading: false,
    products: [],
    error: null,
    active: null,
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const getProducts = async () => {
    dispatch({ type: "LOADING", payload: true });
    const result = await get();
    const { items: products } = result;
    dispatch({ type: "LOADED", payload: products });
  };

  return (
    <>
      <h1 className="title">CMS</h1>
      <p>Products Page</p>
      <hr className="my-8" />
      {state.loading && <p>Loading...</p>}
      <button className="btn primary" onClick={getProducts}>
        Get Products
      </button>
      <pre>
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre>
    </>
  );
};
