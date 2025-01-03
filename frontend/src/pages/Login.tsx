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
    <div className="login-page">
      <div className="welcome-message">
        <span className="text-big">Your easy cooking solution is here!</span>
        <span className="text-small">
          What’s Cooking? helps you find delicious recipes with the ingredients
          you have. Reduce waste, save time, and enjoy personalized meal ideas.
        </span>
        <span className="text-small">
          Log in now to discover exciting dishes and start cooking smarter
          today!
        </span>
      </div>
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?
          <Link to="/register">
            <button>Register</button>
          </Link>
        </p>
      </div>
    </div>
  );
};
