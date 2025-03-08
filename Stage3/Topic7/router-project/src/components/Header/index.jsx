import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../constants/routes";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <h1>Router Project</h1>

      <nav>
        <ul>
          <li
            onClick={() => {
              navigate(ROUTE.HOME);
            }}
          >
            Home
            {/* <Link to="/">Home</Link> */}
          </li>
          <li onClick={() => navigate(ROUTE.ABOUT)}>About</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
