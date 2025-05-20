import React, { useState,useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../App";

function LoginwithJWT() {
  const [email_id, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const { setIsAuthenticated } = useContext(AuthContext);


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8082/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_id, password }),
      });

      console.log(JSON.stringify({ email_id, password }))

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.text();
      const token  = data;

    //   console.log(data+"---------data")
    //   console.log(token+"---------token")

    //   localStorage.setItem("token", token);

      window.sessionStorage.setItem("token", token);
      setIsAuthenticated(true); 
      history.push("/deptadmin");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>email:</label>
          <input
            type="text"
            required
            value={email_id}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
      <a href="">Forget Password</a>
    </div>
  );
}

export default LoginwithJWT;
