import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CategoryExplorer from "../components/CategoryExplorer";
import Favorites from "../components/Favorites";
import { RecipeList } from "./RecipeList"; // Import RecipeList

interface Meal {
  idMeal: string;
  strMeal: string;
}

export const Home = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [favorites, setFavorites] = useState<Meal[]>([]);
  const [ingredient, setIngredient] = useState("");
  const navigate = useNavigate();

  // Fetch favorites from the backend when the component mounts
  useEffect(() => {
    const fetchFavorites = async () => {
      const userId = 1; // Replace with logic to get the actual user's ID
      try {
        const response = await axios.get(
          `http://localhost:3000/api/favorites/${userId}`
        );
        console.log("Fetched Favorites:", response.data);
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  // Function to add a favorite meal
  const addFavorite = async (meal: Meal) => {
    const userId = 1; // Replace with logic to get the actual user's ID
    try {
      await axios.post("http://localhost:3000/api/favorites", {
        userId,
        mealId: meal.idMeal,
        mealName: meal.strMeal,
      });
      setFavorites((prevFavorites) => [...prevFavorites, meal]);
      alert("Meal added to favorites!");
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  // Function to remove a favorite meal
  const removeFavorite = async (mealId: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/favorites/${mealId}`);
      setFavorites((prevFavorites) =>
        prevFavorites.filter((meal) => meal.idMeal !== mealId)
      );
      alert("Meal removed from favorites!");
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  const handleCategorySelect = (selectedMeals: Meal[]) => {
    setMeals(selectedMeals);
    navigate("/recipe-list", { state: { meals: selectedMeals } });
  };

  const handleSuggestClick = async () => {
    try {
      // const response = await axios.get(
      //   "https://www.themealdb.com/api/json/v1/1/random.php"
      // );

      const response = await axios.get(`http://localhost:3000/api/suggestion`);

      const randomMeal = response.data.meals[0];
      navigate("/recipe", { state: { mealId: randomMeal.idMeal } });
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
  };

  const handleSearchClick = async () => {
    try {
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

  return (
    <div className="home-page">
      <h2>Hi you, What's cooking today?</h2>
      <div className="home-content">
        <div className="search-section">
          <div className="btn-suggestion">
            <span>Suggest me something!</span>
            <button
              className="arrow-search no-hover"
              onClick={handleSuggestClick}
            >
              <img src="src/assets/chevron-right.svg" width={30} />
            </button>
          </div>
          <div className="btn-ingredient">
            <span>I have </span>
            <input
              type="text"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              placeholder="Type ingredient"
            />
            <span> in my fridge!</span>
            <button
              className="arrow-search no-hover"
              onClick={handleSearchClick}
            >
              <img src="src/assets/chevron-right.svg" width={30} />
            </button>
          </div>
          <CategoryExplorer setMeals={handleCategorySelect} />
        </div>
        <div className="favorites-section">
          <Favorites favorites={favorites} removeFavorite={removeFavorite} />
        </div>
      </div>
    </div>
  );
};
