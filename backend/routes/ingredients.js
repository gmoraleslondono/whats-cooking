import { Router } from "express";
import axios from "axios";

const router = Router();


router.get("/", async (req, res) => {
    const ingredient = req.query.ingredient;
    const ingredientsAPI = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    try {
    const response = await axios.get(ingredientsAPI);
    
    res.json(response.data);
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;