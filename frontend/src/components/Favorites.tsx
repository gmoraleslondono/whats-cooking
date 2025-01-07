import { useNavigate } from "react-router-dom";
import "./Favorites.css";

// interface FavoriteMeal {
//   id: number; // The unique ID for the favorite entry
//   user_id: number; // The user ID
//   meal_id: string; // The ID of the meal
//   meal_name: string; // The name of the meal
// }

interface Meal {
  meal_id: string;
  meal_name: string;
}

interface FavoritesProps {
  favorites: Meal[];
  removeFavorite: (meal_id: string) => void;
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
            <li key={meal.meal_id} className="favorite-item">
              <p
                className="favorite-title"
                onClick={() => handleMealClick(meal.meal_id)}
              >
                {meal.meal_name}
              </p>
              <button onClick={() => removeFavorite(meal.meal_id)}>
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
