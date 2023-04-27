import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useCartPanel } from "@/services/cart";

export const CartPanel = () => {
  const navigate = useNavigate();

  const closeCartPanel = useCartPanel((state) => state.closeOverlay);

  const goToCart = () => {
    navigate("cart");
    closeCartPanel();
  };

  return (
    <div className="fixed p-3 shadow-2xl bg-slate-800 right-4 top-24 rounded-xl w-96">
      <ul className="flex flex-col gap-4">
        <li className="flex items-center justify-between pb-3 border-b border-slate-600">
          <div>PRODUCT NAME</div>
          <div className="flex gap-3">
            <div>(2 x € 10)</div>
            <div>€ 20</div>
          </div>
        </li>
      </ul>
      <div className="flex justify-end my-3 text-xl font-bold">Total: € 20</div>
      <div className="flex justify-center">
        <Button className="btn primary" onClick={goToCart}>
          Go to cart
        </Button>
      </div>
    </div>
  );
};
