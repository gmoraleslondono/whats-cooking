import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

interface Meal {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
}

export const RecipeDetail = () => {
  const location = useLocation();
  const mealId = location.state?.mealId;
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    if (mealId) {
      fetchMealDetails();
    }
  }, [mealId]);

  if (!meal) {
    return <p>No meal found.</p>;
  }

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <button>Favorite</button>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
};
