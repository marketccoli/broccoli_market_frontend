import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../pages/Home";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { Mypage } from "../pages/Mypage";
import { ChatPage } from "../pages/ChatPage";
import { ProductDetails } from "../pages/ProductDetails";
import { RegionProduct } from "../pages/RegionProduct";
import { ProductsPage } from "../pages/ProductsPage";
import { SearchProduct } from "../pages/SearchProduct";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TOKEN, SET_TOKEN } from "../redux/modules/authSlice";
import jwtDecode from "jwt-decode";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const token = Cookies.get("refreshToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.authenticated);

  useEffect(() => {
    if (token) {
      const { nickname } = jwtDecode(token);
      dispatch(SET_TOKEN(nickname));
    }
    if (isAuth && !token) {
      dispatch(DELETE_TOKEN());
      alert("login session has expired");
      navigate("/");
    }
  }, [navigate]);

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/chats/" element={<ChatPage />} />
        <Route path="/chats/:id" element={<ChatPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/region" element={<RegionProduct />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/search" element={<SearchProduct />} />
      </Routes>
    </AnimatePresence>
  );
};
