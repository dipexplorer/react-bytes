import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ username, password }); //setUser is a function that is passed down from the UserContext
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      &nbsp;&nbsp;
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      &nbsp;&nbsp;
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
