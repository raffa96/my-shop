import { pb } from "@/pocketbase";
import { Product } from "@/models/product";

export const get = () => pb.collection("products").getList<Product>();

export const add = (product: Partial<Product>) =>
  pb.collection("products").create<Product>(product);

export const update = (product: Partial<Product>) =>
  pb.collection("products").update<Product>(product.id!, product);

export const remove = (id: string) => pb.collection("products").delete(id);
