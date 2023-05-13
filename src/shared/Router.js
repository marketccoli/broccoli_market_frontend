import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../pages/Home";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { Mypage } from "../pages/Mypage";
import { ChatPage } from "../pages/ChatPage";
import { Details } from "../pages/Details";
import { AddProduct } from "../pages/AddProduct";
import { RegionProduct } from "../pages/RegionProduct";
import { ProductsPage } from "../pages/ProductsPage";
import { SearchProduct } from "../pages/SearchProduct";

export const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/region" element={<RegionProduct />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/search" element={<SearchProduct />} />
      </Routes>
    </Layout>
  );
};
