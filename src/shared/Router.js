import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../pages/Home";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { Mypage } from "../pages/Mypage";
import { ChatPage } from "../pages/ChatPage";
import { Details } from "../pages/Details";
import { RelatedPosts } from "../pages/RelatedPosts";

export const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/boards/:id" element={<Details />} />
        <Route path="/related" element={<RelatedPosts />} />
      </Routes>
    </Layout>
  );
};
