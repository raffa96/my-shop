import clsx from "clsx";
import { Button, Input } from "@/shared/";
import { useCheckout } from "./hooks/useCheckout";

export const CheckoutPage = () => {
  const { totalCartCost, user, dirty, validators, actions } = useCheckout();
  const { isNameValid, isEmailValid, isFormValid } = validators;
  const { changeHandler, sendOrder } = actions;

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="uppercase title">Checkout</h1>
      <div className="my-3 text-xl border-b ">Total: € {totalCartCost}</div>
      <form className="flex flex-col gap-3" method="post" onSubmit={sendOrder}>
        Your name:
        <Input
          type="text"
          name="name"
          placeholder="Your name"
          value={user.name}
          onChange={changeHandler}
          className={clsx({ error: !isNameValid && dirty })}
        />
        Your email:
        <Input
          type="email"
          name="email"
          placeholder="Your email"
          value={user.email}
          onChange={changeHandler}
          className={clsx({ error: !isEmailValid && dirty })}
        />
        <Button
          type="submit"
          className={clsx("btn", {
            primary: !isFormValid,
            success: isFormValid,
          })}
          disabled={!isFormValid}
        >
          Confirm order
        </Button>
      </form>
    </div>
  );
};
