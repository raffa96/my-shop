import { NavLink } from "react-router-dom";

export const ThanksPage = () => {
  return (
    <>
      <div className="text-3xl text-center">Thanks for your order!</div>
      <div className="flex justify-center mt-12">
        <NavLink to="/shop" className="uppercase btn primary">
          Back to shop
        </NavLink>
      </div>
    </>
  );
};
