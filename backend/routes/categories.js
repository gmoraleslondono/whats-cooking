import { Router } from "express";
import axios from "axios";
 
const router = Router();
 
 
router.get("/", async (req, res) => {
    const category = req.query.category;
    const categoriesAPI = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    try {
    const response = await axios.get(categoriesAPI);
    console.log(response);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });

  }
});
 
export default router;