import { useEffect, useState } from "react";
import { pb } from "@/pocketbase";
import { Product } from "@/models/product";
import { ProductCard } from "./components/ProductCard";
import { Error, Spinner } from "@/shared/";
import { useCart, useCartPanel } from "@/services/cart";

export const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const openCartPanel = useCartPanel((state) => state.openOverlay);
  const addToCart = useCart((state) => state.addToCart);

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

  const onAddToCart = (product: Product) => {
    openCartPanel();
    addToCart(product);
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
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </>
  );
};
