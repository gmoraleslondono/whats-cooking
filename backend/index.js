import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import homeRoute from "./routes/home.js";
import suggestionRoute from "./routes/suggestion.js";
import ingredientsRoute from "./routes/ingredients.js";
import categoriesRoute from "./routes/categories.js";
import authRoute from "./routes/auth.js";
import favoritesRoute from "./routes/favorites.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Swagger setup
const SwaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Whats Cooking App API",
      version: "1.0.0",
      description: "API documentation for the Whats Cooking App",
    },
  },
  apis: ["./routes/*.js"], //* for all js files in route files
};

//Generate documentation
const swaggerDocs = swaggerJSDoc(SwaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/", homeRoute);
app.use("/api/suggestion", suggestionRoute);
app.use("/api/ingredients", ingredientsRoute);
app.use("/api/categories", categoriesRoute);
app.use("/auth", authRoute); //Authentication route
app.use("/api/favorites", favoritesRoute);

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
