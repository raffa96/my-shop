import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectCartItems, selectTotalCartCost, useCart } from "@/services/cart";
import { EMAIL_REGEX } from "@/constants/";

export const useCheckout = () => {
  const navigate = useNavigate();

  const totalCartCost = useCart(selectTotalCartCost);
  const cartItems = useCart(selectCartItems);

  const clearCart = useCart((state) => state.clearCart);

  const [user, setUser] = useState({ name: "", email: "" });
  const [dirty, setDirty] = useState(false);

  const isNameValid = user.name.length;
  const isEmailValid = user.email.match(EMAIL_REGEX);
  const isFormValid = isNameValid && isEmailValid;

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setDirty(true);
  };

  const sendOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const orderInfo = {
      user,
      order: cartItems,
      total: totalCartCost,
      status: "pending",
    };

    console.log(orderInfo);

    clearCart();

    navigate("/thankyou");
  };

  return {
    totalCartCost,
    user,
    dirty,
    validators: {
      isNameValid,
      isEmailValid,
      isFormValid,
    },
    actions: {
      changeHandler,
      sendOrder,
    },
  };
};
