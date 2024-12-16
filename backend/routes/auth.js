import express from "express";
import bcrypt from "bcryptjs"; // For hashing passwords
import jwt from "jsonwebtoken"; // For generating and verifying JSON Web Tokens
import pool from "../db.js"; // Database connection pool


const router = express.Router();

//Register
router.post("/register", async (req,res) => {
    //extract username and password from request body
    const { username, password } = req.body; 
    try {
        //Hash the password for secure storage
        const hashedPassword = await bcrypt.hash(password, 10);
        //Insert the user into the database
        await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, hashedPassword]);
        res.status(201).json({ messge: "User registered successfully"});
    } catch (error) {
        res.status(500).json({ error: "Error registering user "}); 
    }
});


export default router;