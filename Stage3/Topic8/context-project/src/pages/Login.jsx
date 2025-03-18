import React, { useEffect } from "react";
import { useGlobalContext } from "../provider/global/GlobalProvider";

import useInitApp from "../hooks/useInitApp";
import { useNavigate } from "react-router-dom";

function Login() {
  const { dispatch } = useGlobalContext();

  const inputRef = React.useRef(null);

  const navigate = useNavigate();

  const { loading } = useInitApp();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus?.();
    }
  }, [inputRef]);

  const handleLogin = () => {
    const user = inputRef.current.value;
    dispatch({ type: "SET_USER", payload: { name: user } });
    navigate("/");

    localStorage.setItem("user", JSON.stringify({ name: user }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Login
      <input ref={inputRef} />
      <button onClick={handleLogin}>Sign in</button>
    </div>
  );
}

export default Login;
