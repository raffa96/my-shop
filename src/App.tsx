import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import ThanksPage from "./pages/checkout/ThanksPage";
import LoginPage from "./pages/login/LoginPage";
import CMSPage from "./pages/cms/CMSPage";
import CMSProductsPage from "./pages/cms/products/CMSProductsPage";
import CMSOrdersPage from "./pages/cms/orders/CMSOrdersPage";
import Navbar from "./shared/components/core/Navbar";

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
