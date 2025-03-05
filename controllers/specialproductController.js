import { addProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from '../services/specialproductService.js';

// Controller to add a new product
export const createProduct = async (req, res) => {
    try {
        const productData = req.body; // Get data from request body
        const newProduct = await addProduct(productData); // Call the service function
        res.status(201).json(newProduct); // Send the created product as a response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle error
    }
};

// Controller to get all products
export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts(); // Call the service function
        res.status(200).json(products); // Send the list of products as a response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle error
    }
};

// Controller to get a product by ID
export const getProduct = async (req, res) => {
    try {
        const { id } = req.params; // Get product ID from request params
        const product = await getProductById(id); // Call the service function
        res.status(200).json(product); // Send the product as a response
    } catch (error) {
        res.status(404).json({ message: error.message }); // Handle error (Product not found)
    }
};

// Controller to update a product by ID
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params; // Get product ID from request params
        const updatedData = req.body; // Get updated data from request body
        const updatedProduct = await updateProductById(id, updatedData); // Call the service function
        res.status(200).json(updatedProduct); // Send the updated product as a response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle error
    }
};

// Controller to delete a product by ID
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; // Get product ID from request params
        const deletedProduct = await deleteProductById(id); // Call the service function
        res.status(200).json(deletedProduct); // Send the deleted product as a response
    } catch (error) {
        res.status(404).json({ message: error.message }); // Handle error (Product not found)
    }
};
