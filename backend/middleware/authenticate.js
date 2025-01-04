import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        // Verify the token and attach the user data to the request
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user data from the token
        next();
    } catch (err) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

export default authenticate;