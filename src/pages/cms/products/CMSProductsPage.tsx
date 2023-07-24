import { useProductsService } from "@/services/products";

export const CMSProductsPage = () => {
  const { state, actions } = useProductsService();

  const getProducts = () => actions.getProducts();

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
