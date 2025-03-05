import * as productService from "../services/productService.js";

// Controller to add a new product
export const addProduct = async (req, res) => {
    try {
        const product = await productService.addProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get a product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update a product by ID
export const updateProductById = async (req, res) => {
    try {
        const updatedProduct = await productService.updateProductById(req.params.id, req.body);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to delete a product by ID
export const deleteProductById = async (req, res) => {
    try {
        await productService.deleteProductById(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};