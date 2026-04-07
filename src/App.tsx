import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PublicHome from "./pages/publichome";
import Register from "./pages/Register";
import Catalog from "./pages/catalog";
import DetailProduct from "./pages/productdetail";
import Profile from "./pages/profile";
import Cart from "./pages/cart";
import Login from "./pages/login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicHome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/product/:id" element={<DetailProduct />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}