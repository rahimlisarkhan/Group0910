import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../provider/global/GlobalProvider";

export function useInitApp() {
  const [loading, setLoading] = useState(true);

  const { dispatch } = useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      setLoading(false);
      //   setUser(JSON.parse(userData));
      dispatch({ type: "SET_USER", payload: JSON.parse(userData) });
      navigate("/");
    } else {
      setLoading(false);
      navigate("/login");
    }
  }, []);

  return { loading };
}

export default useInitApp;
