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

//Login : Authenticate the user 
router.post("/login", async (req,res) => {
    //Extract username and password from request body 
    const { username, password } =req.body; 
    try {
        //Query the database to find the user
        const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        const user = result.rows[0];
        //If user not found or password does not match, send unauthorized response
        if(!user || !(await bcrypt.compare(passowrd, user.password))) {
            return res.status(401).json({ error: "Invalid credentials"});
        }

        //Generate a JWT token with user ID and username
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
            expiresIn:"1h", //Token expires in 1 hour
        });
        res.status(200).json({ token }); //Send the token to the user
    } catch (error) {
        res.status(500).json({ error: "Error logging in"});
    }
});

//Verify Token: check if the token is valid 
router.get("/verify", (req,res) => {
    //Extract the token from the request headers
    const token = req.headers["authorization"]; 
    //No token provided
    if (!token) return res.status(401).json({ error: "Token missing"})
    
    try {
        //Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({message:  "Token is valid", user: decoded});//Token is valid 
    } catch (error) {
        res.status(401).json({ error: "Invalid Token"});
    }
});


export default router;