import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

interface Meal {
  idMeal: string;
  strMeal: string;
}

interface RecipeListProps {
  addFavorite: (meal: Meal) => void; // Accept addFavorite as a prop
}

export const RecipeList: React.FC<RecipeListProps> = ({ addFavorite }) => {
  const location = useLocation();
  const category = location.state?.category; // Get the category from state
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchMealsByCategory = async () => {
      if (category) {
        try {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          );
          setMeals(response.data.meals || []); // Ensure meals is an array
        } catch (error) {
          console.error("Error fetching meals:", error);
        }
      }
    };

    fetchMealsByCategory();
  }, [category]); // Depend on category

  return (
    <div>
      <h1>{category} Meals</h1>
      {meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              {meal.strMeal}
              <button onClick={() => addFavorite(meal)}>Add to Favorites</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No meals found in this category.</p>
      )}
    </div>
  );
};