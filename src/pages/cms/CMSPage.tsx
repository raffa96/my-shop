import { NavLink, Outlet } from "react-router-dom";

export const CMSPage = () => {
  const isActive = (obj: { isActive: boolean }) => {
    return obj.isActive ? "btn primary" : "btn";
  };

  return (
    <>
      <NavLink to="/cms/products" className={isActive}>
        Products
      </NavLink>
      <NavLink to="/cms/orders" className={isActive}>
        Orders
      </NavLink>
      <Outlet />
    </>
  );
};
