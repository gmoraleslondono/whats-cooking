import { useNavigate } from "react-router-dom";
import "./Favorites.css";

interface Meal {
  idMeal: string;
  strMeal: string;
}

interface FavoritesProps {
  favorites: Meal[];
  removeFavorite: (mealId: string) => void;
}

const Favorites = ({ favorites, removeFavorite }: FavoritesProps) => {
  const navigate = useNavigate();

  const handleMealClick = (mealId: string) => {
    navigate("/recipe", { state: { mealId } });
  };

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        <ul className="favorites-list">
          {favorites.map((meal) => (
            <li key={meal.idMeal} className="favorite-item">
              <p
                className="favorite-title"
                onClick={() => handleMealClick(meal.idMeal)}
              >
                {meal.strMeal}
              </p>
              <button onClick={() => removeFavorite(meal.idMeal)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite meals found.</p>
      )}
    </div>
  );
};

export default Favorites;
