import { NavLink, useNavigate } from "react-router-dom";
import { Button, CartPanel } from "@/shared/";
import {
  selectCartIsEmpty,
  selectTotalCartItems,
  useCart,
  useCartPanel,
} from "@/services/cart";
import logo from "../../../assets/logo.png";
import { useAuth } from "@/services/auth";

export const Navbar = () => {
  const navigate = useNavigate();

  const logout = useAuth((state) => state.logout);

  const isCartPanelOpen = useCartPanel((state) => state.isOpen);
  const toggleCartPanel = useCartPanel((state) => state.toggle);
  const totalCartItems = useCart(selectTotalCartItems);
  const cartIsEmpty = useCart(selectCartIsEmpty);

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };

  const isActive = (obj: { isActive: boolean }) =>
    obj.isActive ? "active" : "";

  return (
    <div className="navbar">
      {/* brand */}
      <div className="brand">
        <img src={logo} alt="logo" />
        <NavLink to="shop" className={isActive}>
          Shop
        </NavLink>
      </div>
      {/* cart button badge */}
      <div className="cart">
        <Button
          disabled={cartIsEmpty}
          className="btn accent lg"
          onClick={toggleCartPanel}
        >
          Cart: {totalCartItems}
        </Button>
      </div>
      {/* cart panel */}
      {isCartPanelOpen && <CartPanel />}
      {/* login button, cms button and logout button */}
      <div className="links">
        <NavLink to="login" className="btn accent lg">
          Login
        </NavLink>
        <NavLink to="cms" className="btn accent lg">
          CMS
        </NavLink>
        <Button className="btn primary lg" onClick={logoutHandler}>
          Logout
        </Button>
      </div>
    </div>
  );
};
