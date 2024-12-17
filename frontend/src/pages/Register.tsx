import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
  
    const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
    //Check if password match 
    if (password !== confirmPassword){
        alert("Password does not match");
        return;
    }

      try {
        //Send a POST request to the backend with username and password
        const response = await fetch("http://localhost:3000/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" }, // Set content type to JSON
          body: JSON.stringify({ username, password }), // Convert data to JSON
        });
  
        if (!response.ok) {throw new Error("Error registering user");}
        
        //Redirect to login page after successful registeration
        alert("Rgistration successful! Please log in.");
        navigate("/");
        
      } catch (error) {
        alert("Error registering")
      }
      
    };
  
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
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
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };