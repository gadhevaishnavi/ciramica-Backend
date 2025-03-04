import * as productService from "../services/productService.js";

// Create a new product
export const createProductController = async (req, res) => {
    try {
        const productData = req.body; // assuming the product data is in the request body
        const newProduct = await productService.createProduct(productData);
        res.status(201).json({ success: true, product: newProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all products
export const getAllProductsController = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get a product by reference
export const getProductByReferenceController = async (req, res) => {
    try {
        const { reference } = req.params;
        const product = await productService.getProductByReference(reference);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a product by reference
export const updateProductByReferenceController = async (req, res) => {
    try {
        const { reference } = req.params;
        const updatedData = req.body;
        const updatedProduct = await productService.updateProductByReference(reference, updatedData);
        res.status(200).json({ success: true, product: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a product by reference
export const deleteProductByReferenceController = async (req, res) => {
    try {
        const { reference } = req.params;
        const deletedProduct = await productService.deleteProductByReference(reference);
        res.status(200).json({ success: true, message: "Product deleted", product: deletedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get products by brand
export const getProductsByBrandController = async (req, res) => {
    try {
        const { brand } = req.params;
        const products = await productService.getProductsByBrand(brand);
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get products in stock
export const getProductsInStockController = async (req, res) => {
    try {
        const products = await productService.getProductsInStock();
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Search for products by name or description
export const searchProductsController = async (req, res) => {
    try {
        const { query } = req.query; // assuming the query parameter is sent as `?query=someSearchTerm`
        const products = await productService.searchProducts(query);
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
