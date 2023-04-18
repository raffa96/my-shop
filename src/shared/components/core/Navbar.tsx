import { NavLink } from "react-router-dom";
import { Button } from "@/shared/index";
import logo from "../../../assets/logo.png";

export const Navbar = () => {
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
        <Button className="btn accent lg">Cart: 0</Button>
      </div>
      {/* login button, cms button and logout button */}
      <div className="links">
        <NavLink to="login" className="btn accent lg">
          Login
        </NavLink>
        <NavLink to="cms" className="btn accent lg">
          CMS
        </NavLink>
        <Button className="btn primary lg">Logout</Button>
      </div>
    </div>
  );
};
