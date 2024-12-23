import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    if (username === "user" && password === "password") {
      navigate("/home");
    } else {
      alert("Invalid credentials");
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
        <p>username = "user" password = "password"</p>
      </div>
    </div>
  );
};
