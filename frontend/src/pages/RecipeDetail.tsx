import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./RecipeDetail.css"; // Import the CSS file

interface Meal {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  [key: string]: string; // To handle dynamic keys for ingredients and measurements
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

  // Extract ingredients and measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="recipe-detail">
      <div className="content-column">
        <div className="title">
          <button>Favorite</button>
          <h2>{meal.strMeal}</h2>
        </div>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p>{meal.strInstructions}</p>
      </div>
      <div className="image-column">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
    </div>
  );
};
