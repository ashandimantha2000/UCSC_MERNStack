import React from "react";
import { useNavigate } from "react-router-dom";

function UseNavigate() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => {
    setIsLogged(true);
    setTimeout(() => {
      navigate("/");
    }, 1500);
    // navigate("/");
  };
  return (
    <div>
      {!isLogged ? (
        <div>
          <h1>Login</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <h1>You Logged in!</h1>
      )}
    </div>
  );
}

export default UseNavigate;
