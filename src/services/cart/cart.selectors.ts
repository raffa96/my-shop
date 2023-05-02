import { CartState } from "@/services/cart/useCart";

export const selectCartItems = (state: CartState) => state.items;

export const selectCartIsEmpty = (state: CartState) => state.items.length === 0;

export const selectTotalCartCost = (state: CartState) =>
  state.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

export const selectTotalCartItems = (state: CartState) =>
  state.items.reduce((total, item) => total + item.quantity, 0);
