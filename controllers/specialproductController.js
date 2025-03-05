import * as specialProductService from '../services/specialproductService.js'

// Controller to add a new product
export const addProduct = async (req, res) => {
    try {
        const product = await specialProductService.addProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await specialProductService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get a product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await specialProductService.getProductById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update a product by ID
export const updateProductById = async (req, res) => {
    try {
        const updatedProduct = await specialProductService.updateProductById(req.params.id, req.body);
        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to delete a product by ID
export const deleteProductById = async (req, res) => {
    try {
        const deletedProduct = await specialProductService.deleteProductById(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
