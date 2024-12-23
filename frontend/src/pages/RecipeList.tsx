import { useLocation, useNavigate } from "react-router-dom";
import "./RecipeList.css";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export const RecipeList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const meals = location.state?.meals || [];

  const handleMealClick = (mealId: string) => {
    navigate("/recipe", { state: { mealId } });
  };

  return (
    <div>
      <h1>Recipe List</h1>
      <div className="category-meal-list">
        {meals.length > 0 ? (
          <ul>
            {meals.map((meal: Meal) => (
              <li
                key={meal.idMeal}
                onClick={() => handleMealClick(meal.idMeal)}
              >
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strMeal}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No meals found.</p>
        )}
      </div>
    </div>
  );
};
