import { Router } from "express";
import axios from "axios";

const router = Router();

/**
 * @swagger
 * /api/ingredients?ingredient={ingredient}:
 *   get:
 *     summary: Get meal by ingredient
 *     parameters:
 *       - in: query
 *         name: ingredient
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the ingredient
 *     responses:
 *       200:
 *         description: A list of meals with the ingredient
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 meals:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       strMeal:
 *                         type: string
 *                       strMealThumb:
 *                         type: string
 *                       idMeal:
 *                         type: string
 *       500:
 *         description: Error retrieving meals
 */

router.get("/", async (req, res) => {
  const ingredient = req.query.ingredient;
  const ingredientsAPI = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await axios.get(ingredientsAPI);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving meals." });
  }
});

export default router;
