import { useEffect, useState } from "react";
import { pb } from "@/pocketbase";
import { Product } from "@/models/products";

export const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadData = () => {
    pb.collection("products")
      .getList<Product>()
      .then((result) => {
        const { items } = result;
        setProducts(items);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1 className="title">Shop</h1>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </>
  );
};
