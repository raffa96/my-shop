import { NavLink } from "react-router-dom";
import {
  selectCartIsEmpty,
  selectCartItems,
  selectTotalCartCost,
  useCart,
} from "@/services/cart/";
import { Button } from "@/shared/";

export const CartPage = () => {
  const cartItems = useCart(selectCartItems);
  const totalCartCost = useCart(selectTotalCartCost);
  const cartIsEmpty = useCart(selectCartIsEmpty);

  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);

  return (
    <>
      <h1 className="title">Cart</h1>
      <ul>
        {cartItems.map(({ product, quantity }) => (
          <li
            key={product.id}
            className="flex flex-col items-center justify-between gap-3 py-3 border-b border-blue-400 sm:flex-row"
          >
            <div className="flex items-center gap-3">
              <img
                src={product.tmb}
                alt={product.name}
                className="object-contain w-24 h-24 rounded-xl"
              />
              <div className="font-bold">{product.name}</div>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="flex items-center gap-3">
                <Button
                  className="btn primary"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </Button>
                <div>Quantity: {quantity}</div>
                <Button
                  className="btn primary"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </Button>
              </div>
              <div className="w-16 text-center">
                € {quantity * product.price}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="my-4 mr-4 text-4xl text-right">
        Total: € {totalCartCost}
      </div>

      {!cartIsEmpty && (
        <div className="flex justify-center">
          <NavLink to="/checkout" className="btn primary lg">
            Confirm order
          </NavLink>
        </div>
      )}
    </>
  );
};
