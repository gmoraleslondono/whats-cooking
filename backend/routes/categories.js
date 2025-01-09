import { Router } from "express";
import axios from "axios";
 
const router = Router();
 
/**@swagger
  /api/categories?category={category}:
      "get": {
        "summary": "Get Meals by Category",
        "description": "Fetches a list of meals from TheMealDB API filtered by the provided category.",
        "parameters": [
          {
            "name": "category",
            "in": "query",
            "description": "The category of meals to filter by (e.g., 'Seafood', 'Beef').",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "A successful response containing the list of meals.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "meals": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "idMeal": { "type": "string" },
                          "strMeal": { "type": "string" },
                          "strMealThumb": { "type": "string" }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request. Likely due to a missing or invalid category query parameter.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": { "type": "string" }
                  }
                }
              }
            }
          },
          "500": {
            "description": "Internal Server Error. Could occur if there is an issue with the external API or the server.",
            
            }
          }
        }
      }
    }
  
*/
 
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