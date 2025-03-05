// import express from 'express';
// import {
//     createProductController,
//     getAllProductsController,
//     getProductByReferenceController,
//     updateProductByReferenceController,
//     deleteProductByReferenceController,
//     getProductsByBrandController,
//     getProductsInStockController,
//     searchProductsController,
// } from '../controllers/productController.js';

// const productRoute = express.Router();


// productRoute.post('/products', createProduct);
// productRoute.get('/products', getAllProductsController);
// productRoute.get("/products/:id", productController.getProductById);
// productRoute.get('/products/:reference', getProductByReferenceController);
// productRoute.put('/products/:reference', updateProductByReferenceController);
// productRoute.delete('/products/:reference', deleteProductByReferenceController);
// productRoute.get('/products/brand/:brand', getProductsByBrandController);
// productRoute.get('/products/in-stock', getProductsInStockController);
// productRoute.get('/products/search', searchProductsController);

// export default productRoute;

import express from "express";
import * as productController from "../controllers/productController.js";

const productRoute = express.Router();

// Create a new product
productRoute.post("/products", productController.createProduct);

// Get all products
productRoute.get("/products", productController.getAllProducts);

// Get a product by ID
productRoute.get("/products/:id", productController.getProductById);

// Get a product by reference
productRoute.get("/reference/:reference", productController.getProductByReference);

// Update a product by reference
productRoute.put("/reference/:reference", productController.updateProductByReference);

// Delete a product by reference
productRoute.delete("/reference/:reference", productController.deleteProductByReference);

// Get products by brand
productRoute.get("/brand/:brand", productController.getProductsByBrand);

// Get products in stock
productRoute.get("/in-stock", productController.getProductsInStock);

// Search for products by name or description
productRoute.get("/search", productController.searchProducts);

export default productRoute;

