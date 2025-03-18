import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../provider/global/GlobalProvider";

function Header() {
  const { user, basket } = useGlobalContext();

  const [show, setShow] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/basket">Basket: {basket?.length || 0}</Link>
          </li>

          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
