import ProductPage from "./pages/allProducts.jsx";
import RegisterPage from "./pages/RegistrationPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import OrderPage from "./pages/orderPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
