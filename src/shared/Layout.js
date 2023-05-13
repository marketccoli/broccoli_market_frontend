import React from "react";
import { Header } from "../Layout/Header";
import { Footer } from "../Layout/Footer";
import { useLocation } from "react-router-dom";

export const Layout = ({ children }) => {
  const location = useLocation();
  let showFooter = true;
  if (location.pathname === "/signup" || location.pathname === "/login") {
    showFooter = false;
  } else {
    showFooter = true;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow h-full">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};
