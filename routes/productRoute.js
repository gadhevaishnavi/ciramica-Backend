import express from "express";
import {
    addProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
} from "../controllers/productController.js";

const productRoute = express.Router();

// Route to add a new product
productRoute.post("/products", addProduct);

// Route to get all products
productRoute.get("/products", getAllProducts);

// Route to get a product by ID
productRoute.get("/products/:id", getProductById);

// Route to update a product by ID
productRoute.put("/:id", updateProductById);

// Route to delete a product by ID
productRoute.delete("/:id", deleteProductById);

export default productRoute;

