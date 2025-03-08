import React from "react";
import Header from "../Header";

function Layout({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
