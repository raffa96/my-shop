import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import {
  selectCartItems,
  selectTotalCartCost,
  useCart,
  useCartPanel,
} from "@/services/cart";

export const CartPanel = () => {
  const navigate = useNavigate();

  const closeCartPanel = useCartPanel((state) => state.closeOverlay);

  const items = useCart(selectCartItems);
  const totalCartCost = useCart(selectTotalCartCost);

  const goToCart = () => {
    navigate("cart");
    closeCartPanel();
  };

  return (
    <div className="fixed p-3 shadow-2xl bg-slate-800 right-4 top-24 rounded-xl w-96">
      <ul className="flex flex-col gap-4">
        {items.map(({ product, quantity }) => (
          <li
            key={product.id}
            className="flex items-center justify-between pb-3 border-b border-slate-600"
          >
            <div>{product.name}</div>
            <div className="flex gap-3">
              <div>
                ({quantity} x € {product.price})
              </div>
              <div>€ {quantity * product.price}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-end my-3 text-xl font-bold">
        Total: € {totalCartCost}
      </div>
      <div className="flex justify-center">
        <Button className="btn primary" onClick={goToCart}>
          Go to cart
        </Button>
      </div>
    </div>
  );
};
