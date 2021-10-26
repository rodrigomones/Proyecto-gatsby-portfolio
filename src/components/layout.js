import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
