import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./RecipeDetail.css"; // Import the CSS file

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
    <div className="recipe-detail">
      <div className="image-column">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className="content-column">
        <div className="title">
          <button>Favorite</button>
          <h2>{meal.strMeal}</h2>
        </div>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
};
