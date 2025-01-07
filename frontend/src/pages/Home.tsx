// Home.tsx
//import { decode } from 'jwt-decode'; // Import jwt-decode to decode the token
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CategoryExplorer from "../components/CategoryExplorer";
import Favorites from "../components/Favorites";
import "./Home.css";

interface DecodedToken {
  id: string;
}

interface Meal {
  idMeal: string;
  strMeal: string;
}

export const Home = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [favorites, setFavorites] = useState<Meal[]>([]);
  const [ingredient, setIngredient] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          // const decoded: DecodedToken = jwt_decode(token);
          // const userId = decoded.id;
          // console.log({ userId });
          const storedUserId = localStorage.getItem("id");
          setUserId(storedUserId);
          console.log(storedUserId);
          console.log(userId);
          const response = await axios.get(
            `http://localhost:3000/api/favorites/${storedUserId}`
          );
          setFavorites(response.data);
        }
      } catch (error) {
        console.error(
          "Error fetching favorites:",
          JSON.stringify(error, null, 2)
        );
      }
    };

    fetchFavorites();
  }, []);

  const removeFavorite = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/favorites/${mealId}`);
      setFavorites((prevFavorites) =>
        prevFavorites.filter((meal) => meal.idMeal !== mealId)
      );
      alert("Meal removed from favorites!");
    } catch (error) {
      console.error("Error fetching random meal:", error);
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
