import React from "react";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      404 OPPS!
      <br />
      <br />
      Page not found
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back
      </button>
    </div>
  );
}

export default NotFound;
