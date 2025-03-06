import express from 'express';
import {
    createFeatureProductController,
    getAllFeatureProductsController,
    getFeatureProductByIdController,
    updateFeatureProductController,
    deleteFeatureProductController,
    getFeatureProductsByBrandController,
    getFeatureProductsByPriceRangeController
} from '../controllers/featureproductController.js'; // Adjust the path if necessary

const featureRoute = express.Router();

// Route to create a new feature product
featureRoute.post('/', createFeatureProductController);

// Route to get all feature products
featureRoute.get('/', getAllFeatureProductsController);

// Route to get a feature product by its ID
featureRoute.get('/:productId', getFeatureProductByIdController);

// Route to update a feature product by its ID
featureRoute.put('/:productsId', updateFeatureProductController);

// Route to delete a feature product by its ID
featureRoute.delete('/products/:productId', deleteFeatureProductController);

// Route to get products by brand
featureRoute.get('/brand', getFeatureProductsByBrandController);

// Route to get products within a price range
featureRoute.get('/price', getFeatureProductsByPriceRangeController);

export default featureRoute;
