import { Product } from "@/models/product";
import { Button } from "@/shared/";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = (props: ProductCardProps) => {
  const { product, onAddToCart } = props;
  return (
    <div
      key={product.id}
      className="overflow-hidden text-black bg-white shadow-2xl rounded-xl"
    >
      {product.image && (
        <img
          src={product.image}
          className="object-contain w-full h-64"
          alt={product.name}
        />
      )}
      <div className="flex items-center justify-between p-3 text-xl font-bold">
        <div>{product.name}</div>
        <div>€{product.price}</div>
      </div>
      <p className="p-3">{product.description}</p>
      <Button
        className="w-full p-3 font-bold text-white uppercase transition bg-sky-600 hover:bg-sky-800"
        onClick={() => onAddToCart(product)}
      >
        Add to cart
      </Button>
    </div>
  );
};
