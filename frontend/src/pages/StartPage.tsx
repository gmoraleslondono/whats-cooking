import { Login } from "../components/Login";
import "./StartPage.css";

export const StartPage = () => {
  return (
    <div className="start-page">
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
      <Login />
    </div>
  );
};
