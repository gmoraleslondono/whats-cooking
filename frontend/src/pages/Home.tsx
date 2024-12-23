import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CategoryExplorer from "../components/CategoryExplorer";
import Favorites from "../components/Favorites";

interface Meal {
  idMeal: string;
  strMeal: string;
}

export const Home = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [favorites, setFavorites] = useState<Meal[]>([]);
  const [ingredient, setIngredient] = useState("");
  const navigate = useNavigate();

  const handleCategorySelect = (selectedMeals: Meal[]) => {
    setMeals(selectedMeals);
    navigate("/recipe-list", { state: { meals: selectedMeals } });
  };

  const handleSuggestClick = async () => {
    try {
      const response = await axios.get(
         "https://www.themealdb.com/api/json/v1/1/random.php"
       );

      const randomMeal = response.data.meals[0];
      navigate("/recipe", { state: { mealId: randomMeal.idMeal } });
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
  };

  const handleSearchClick = async () => {
    try {
      //const response = await axios.get(
        //`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      //);
      const response = await axios.get(
        `http://localhost:3000/api/ingredients?ingredient=${ingredient}`
      );
      const meals = response.data.meals;
      if (meals.length > 0) {
        navigate("/recipe-list", { state: { meals } });
      } else {
        alert("No meals found with the given ingredient");
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  const removeFavorite = (mealId: string) => {
    setFavorites(favorites.filter((meal) => meal.idMeal !== mealId));
  };

  return (
    <div>
      <h1>What's Cooking?</h1>
      <button onClick={handleSuggestClick}>Suggest me something!</button>
      <div className="section-ingredient">
        <span>I have </span>
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter an ingredient"
        />
        <span> on my fridge!</span>
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <CategoryExplorer setMeals={handleCategorySelect} />
      <Favorites favorites={favorites} removeFavorite={removeFavorite} />
    </div>
  );
};
