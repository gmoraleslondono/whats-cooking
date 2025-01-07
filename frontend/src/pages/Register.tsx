import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    //Check if password match
    if (password !== confirmPassword) {
      alert("Password does not match");

      //clear the form inputs to empty strings after error.
      setUsername("");
      setPassword("");
      setConfirmPassword("");

      return;
    }

    try {
      //Send a POST request to the backend with username and password
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Set content type to JSON
        body: JSON.stringify({ username, password }), // Convert data to JSON
      });

      if (!response.ok) {
        throw new Error("Error registering user");
      }

      //direct to home page after successful registeration
      alert("Registration successful!");
      navigate("/home");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error registering");

      //clear the form inputs to empty strings after error.
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="register-form">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="btn-register" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
