import axios from "axios";
import "./CategoryExplorer.css";

interface Meal {
  idMeal: string;
  strMeal: string;
}

interface CategoryExplorerProps {
  setMeals: (meals: Meal[]) => void;
}

const CategoryExplorer = ({ setMeals }: CategoryExplorerProps) => {
  const categories = [
    "Chicken",
    "Beef",
    "Seafood",
    "Vegetarian",
    "Dessert",
    "Pasta",
  ];

  const handleCategoryClick = async (category: string) => {
    try {
      const response = await axios.get(
        
    `http://localhost:3000/api/categories?category=${category}`
      );
      setMeals(response.data.meals);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  return (
    <div>
      <h3>Explore by Categories</h3>
      <div className="category-buttons">
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryExplorer;
