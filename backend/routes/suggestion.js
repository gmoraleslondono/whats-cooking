import { Router } from "express";
import axios from "axios";

const router = Router();

const randomRecipeAPI = "https://www.themealdb.com/api/json/v1/1/random.php";

/**
 * @swagger
 * /api/suggestion:
 *   get:
 *     summary: Get a random recipe
 *     responses:
 *       200:
 *         description: A random recipe
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 meals:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Error retrieving recipe
 */
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(randomRecipeAPI);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving recipe." });
  }
});

export default router;
