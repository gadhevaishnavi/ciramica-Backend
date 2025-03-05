import express from 'express';
import * as specialproductController from '../controllers/specialproductController.js';

const specialRoute = express.Router();

// Define the routes
specialRoute.post('/', specialproductController.addProductController);
specialRoute.get('/', specialproductController.getAllProductsController);
specialRoute.get('/:reference', specialproductController.getProductByReferenceController);
specialRoute.put('/:reference', specialproductController.updateProductByReferenceController);
specialRoute.delete('/:reference', specialproductController.deleteProductByReferenceController);
specialRoute.get('/brand/:brand', specialproductController.getProductsByBrandController);
specialRoute.get('/price', specialproductController.getProductsByPriceRangeController);
specialRoute.put('/stock/:reference', specialproductController.updateProductStockController);

export default specialRoute;
