interface Meal {
  idMeal: string;
  strMeal: string;
}

interface FavoritesProps {
  favorites: Meal[];
  removeFavorite: (mealId: string) => void;
}

const Favorites = ({ favorites, removeFavorite }: FavoritesProps) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((meal) => (
            <li key={meal.idMeal}>
              {meal.strMeal}
              <button onClick={() => removeFavorite(meal.idMeal)}>
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
