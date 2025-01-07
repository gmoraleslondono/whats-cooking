import { Router } from "express";
import pool from "../db.js"; // Import your database connection

const router = Router();

// Add a favorite meal
router.post("/", async (req, res) => {
    const { userId, mealId, mealName } = req.body;
    try {
        await pool.query("INSERT INTO favorites (user_id, meal_id, meal_name) VALUES ($1, $2, $3)", [userId, mealId, mealName]);
        res.status(201).json({ message: "Favorite added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error adding favorite" });
    }
});

// Get all favorites for a user
router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const result = await pool.query("SELECT * FROM favorites WHERE user_id = $1", [userId]);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving favorites" });
    }
});

// Remove a favorite meal
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query("DELETE FROM favorites WHERE meal_id = $1", [id]);
        res.status(200).json({ message: "Favorite removed successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error removing favorite" });
    }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params; // Get the ID of the favorite meal to update
  const { meal_id, meal_name } = req.body; // Get the new meal details from the request body

  try {
      // Update the favorite meal in the database
      await pool.query(
          "UPDATE favorites SET meal_id = $1, meal_name = $2 WHERE id = $3",
          [meal_id, meal_name, id]
      );
      res.status(200).json({ message: "Favorite updated successfully" });
  } catch (error) {
      res.status(500).json({ error: "Error updating favorite" });
  }
});

export default router;