import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navbar } from "@/shared/index";
import {
  LoginPage,
  CMSPage,
  CMSProductsPage,
  CMSOrdersPage,
  ShopPage,
  CartPage,
  CheckoutPage,
  ThanksPage,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <hr />
      <div className="page">
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="cms" element={<CMSPage />}>
            <Route index element={<Navigate to="products" />} />
            <Route path="products" element={<CMSProductsPage />} />
            <Route path="orders" element={<CMSOrdersPage />} />
          </Route>
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="thankyou" element={<ThanksPage />} />
          <Route path="*" element={<Navigate to="shop" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
