import express from "express";
import * as specialProductController from "../controllers/specialproductController.js";

const specialRoute = express.Router();

// Route to add a new product
specialRoute.post("/", specialProductController.addProduct);

// Route to get all products
specialRoute.get("/", specialProductController.getAllProducts);

// Route to get a product by ID
specialRoute.get("/:id", specialProductController.getProductById);

// Route to update a product by ID
specialRoute.put("/update/:id", specialProductController.updateProductById);

// Route to delete a product by ID
specialRoute.delete("/delete/:id", specialProductController.deleteProductById);

export default specialRoute;
