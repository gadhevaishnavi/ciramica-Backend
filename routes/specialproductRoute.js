import express from 'express';
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/specialproductController.js';

const specialRoute = express.Router();

// Routes for product operations
specialRoute.post('/products', createProduct); // Add new product
specialRoute.get('/products', getProducts); // Get all products
specialRoute.get('/products/:id', getProduct); // Get a product by ID
specialRoute.put('/products/:id', updateProduct); // Update product by ID
specialRoute.delete('/products/:id', deleteProduct); // Delete product by ID

export default specialRoute;
