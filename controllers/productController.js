import * as productService from "../services/productService.js";

// Create a new product
export const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a product by reference
export const getProductByReference = async (req, res) => {
    try {
        const product = await productService.getProductByReference(req.params.reference);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a product by reference
export const updateProductByReference = async (req, res) => {
    try {
        const updatedProduct = await productService.updateProductByReference(req.params.reference, req.body);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product by reference
export const deleteProductByReference = async (req, res) => {
    try {
        const deletedProduct = await productService.deleteProductByReference(req.params.reference);
        res.status(200).json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get products by brand
export const getProductsByBrand = async (req, res) => {
    try {
        const products = await productService.getProductsByBrand(req.params.brand);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get products in stock
export const getProductsInStock = async (req, res) => {
    try {
        const products = await productService.getProductsInStock();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Search for products by name or description
export const searchProducts = async (req, res) => {
    try {
        const products = await productService.searchProducts(req.query.q);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
