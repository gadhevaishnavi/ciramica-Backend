import {createFeatureProduct,getAllFeatureProducts,getFeatureProductById,updateFeatureProduct,
  deleteFeatureProduct,getFeatureProductsByBrand,getFeatureProductsByPriceRange} from '../services/featureproductService.js';

// Controller for creating a new feature product
export const createFeatureProductController = async (req, res) => {
  try {
      const productData = req.body; // assuming the product data is sent in the body of the request
      const newProduct = await createFeatureProduct(productData);
      res.status(201).json(newProduct); // Send back the created product with a 201 status code
  } catch (error) {
      res.status(500).json({ message: error.message }); // Handle any errors with a 500 status code
  }
};

// Controller for getting all feature products
export const getAllFeatureProductsController = async (req, res) => {
  try {
      const products = await getAllFeatureProducts();
      res.status(200).json(products); // Send back the list of products with a 200 status code
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Controller for getting a feature product by ID
export const getFeatureProductByIdController = async (req, res) => {
  try {
      const { productId } = req.params; // Product ID is passed as a parameter in the URL
      const product = await getFeatureProductById(productId);
      res.status(200).json(product); // Send back the found product with a 200 status code
  } catch (error) {
      res.status(404).json({ message: error.message }); // If the product is not found, send 404
  }
};

// Controller for updating a feature product by ID
export const updateFeatureProductController = async (req, res) => {
  try {
      const { productId } = req.params; // Product ID is passed as a parameter in the URL
      const updatedData = req.body; // Updated data is passed in the body of the request
      const updatedProduct = await updateFeatureProduct(productId, updatedData);
      res.status(200).json(updatedProduct); // Send back the updated product with a 200 status code
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Controller for deleting a feature product by ID
export const deleteFeatureProductController = async (req, res) => {
  try {
      const { productId } = req.params; // Product ID is passed as a parameter in the URL
      const deletedProduct = await deleteFeatureProduct(productId);
      res.status(200).json(deletedProduct); // Send back the deleted product with a 200 status code
  } catch (error) {
      res.status(404).json({ message: error.message }); // If the product is not found, send 404
  }
};

// Controller for getting products by brand
export const getFeatureProductsByBrandController = async (req, res) => {
  try {
      const { brand } = req.query; // Brand is passed as a query parameter in the URL
      const products = await getFeatureProductsByBrand(brand);
      res.status(200).json(products); // Send back the filtered products with a 200 status code
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Controller for getting products within a price range
export const getFeatureProductsByPriceRangeController = async (req, res) => {
  try {
      const { minPrice, maxPrice } = req.query; // minPrice and maxPrice are passed as query parameters in the URL
      const products = await getFeatureProductsByPriceRange(minPrice, maxPrice);
      res.status(200).json(products); // Send back the filtered products with a 200 status code
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
