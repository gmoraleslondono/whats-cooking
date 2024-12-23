import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
        <h2>What's Cooking?</h2>
      </div>
      {location.pathname !== "/" && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
