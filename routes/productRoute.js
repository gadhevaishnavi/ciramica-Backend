import express from 'express';
import {
    createProductController,
    getAllProductsController,
    getProductByReferenceController,
    updateProductByReferenceController,
    deleteProductByReferenceController,
    getProductsByBrandController,
    getProductsInStockController,
    searchProductsController,
} from '../controllers/productController.js';

const productRoute = express.Router();

// Routes
productRoute.post('/products', createProductController);
productRoute.get('/products', getAllProductsController);
productRoute.get('/products/:reference', getProductByReferenceController);
productRoute.put('/products/:reference', updateProductByReferenceController);
productRoute.delete('/products/:reference', deleteProductByReferenceController);
productRoute.get('/products/brand/:brand', getProductsByBrandController);
productRoute.get('/products/in-stock', getProductsInStockController);
productRoute.get('/products/search', searchProductsController);

export default productRoute;
