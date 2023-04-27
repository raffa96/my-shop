import { useEffect, useState } from "react";
import { pb } from "@/pocketbase";
import { Product } from "@/models/products";
import { ProductCard } from "./components/ProductCard";
import { Error, Spinner } from "@/shared/";

export const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const loadData = () => {
    setHasError(false);
    setLoading(true);
    pb.collection("products")
      .getList<Product>()
      .then((result) => {
        const { items } = result;
        setProducts(items);
      })
      .catch((error) => {
        console.error(error);
        setHasError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addToCart = (product: Partial<Product>) => {
    console.log("Add to cart", product);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1 className="title">Shop</h1>

      {loading && <Spinner />}

      {hasError && <Error message="A server error occurred!" />}

      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
};
