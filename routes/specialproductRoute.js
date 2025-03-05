import express from "express";
import * as specialProductController from "../controllers/specialProductController.js";

const specialRoute = express.Router();

// Routes for special products
specialRoute.post("/", specialProductController.addProduct); // Add a new product
specialRoute.get("/", specialProductController.getAllProducts); // Get all products
specialRoute.get("/:id", specialProductController.getProductById); // Get product by ID
specialRoute.get("/reference/:reference", specialProductController.getProductByReference); // Get product by reference
specialRoute.put("/id/:id", specialProductController.updateProductById); // Update product by ID
specialRoute.put("/reference/:reference", specialProductController.updateProductByReference); // Update product by reference
specialRoute.delete("/id/:id", specialProductController.deleteProductById); // Delete product by ID
specialRoute.delete("/reference/:reference", specialProductController.deleteProductByReference); //Delete product by reference
specialRoute.get("/brand/:brand", specialProductController.getProductsByBrand); // Get products by brand
specialRoute.get("/price-range", specialProductController.getProductsByPriceRange); // Get products in price range
specialRoute.put("/stock/:reference", specialProductController.updateProductStock); // Update product stock

export default specialRoute;
