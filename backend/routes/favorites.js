import { Router } from "express";
import pool from "../db.js"; // Import your database connection

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Favorite:
 *       type: object
 *       properties:
 *         userId:
 *           type: integer
 *           description: The ID of the user
 *         mealId:
 *           type: integer
 *           description: The ID of the meal
 *         mealName:
 *           type: string
 *           description: The name of the meal
 */

/**
 * @swagger
 * /favorites:
 *   post:
 *     summary: Add a favorite meal
 *     tags: [Favorites]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Favorite'
 *     responses:
 *       201:
 *         description: Favorite added successfully
 *       500:
 *         description: Error adding favorite
 */
router.post("/", async (req, res) => {
    const { userId, mealId, mealName } = req.body;
    try {
        await pool.query("INSERT INTO favorites (user_id, meal_id, meal_name) VALUES ($1, $2, $3)", [userId, mealId, mealName]);
        res.status(201).json({ message: "Favorite added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error adding favorite" });
    }
});

/**
 * @swagger
 * /favorites/{userId}:
 *   get:
 *     summary: Get all favorites for a user
 *     tags: [Favorites]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: A list of favorite meals
 *       500:
 *         description: Error retrieving favorites
 */
router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const result = await pool.query("SELECT * FROM favorites WHERE user_id = $1", [userId]);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving favorites" });
    }
});

/**
 * @swagger
 * /favorites/delete/{id}:
 *   delete:
 *     summary: Remove a favorite meal
 *     tags: [Favorites]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the meal to remove
 *     responses:
 *       200:
 *         description: Favorite removed successfully
 *       500:
 *         description: Error removing favorite
 */
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query("DELETE FROM favorites WHERE meal_id = $1", [id]);
        res.status(200).json({ message: "Favorite removed successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error removing favorite" });
    }
});

export default router;
