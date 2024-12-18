import { Router } from "express";
import axios from "axios";

const router = Router();

const randomRecipeAPI = "https://www.themealdb.com/api/json/v1/1/random.php";

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(randomRecipeAPI);
    res.json(response.data);
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;
