import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //Send a POST request to the backend with username and password
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Set content type to JSON
        body: JSON.stringify({ username, password }), // Convert data to JSON
      });

      if (!response.ok) throw new Error("Invalid credentials");

      const data = await response.json(); //Parse JSON response
      localStorage.setItem("token", data.token); //Save the token in localStorage
      navigate("/home");
    } catch (error) {
      console.error("Loggin error:", error);
      alert("Invalid credentials");

      //clear the form inputs to empty strings after error.
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-form">
      <h2 className="login-title">Login</h2>
      <form className="form" onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-login" type="submit">
          Login
        </button>
      </form>
      <span>
        Don't have an account?
        <Link to="/register">
          <button className="link-register">Register</button>
        </Link>
      </span>
    </div>
  );
};
