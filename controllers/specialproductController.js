import * as specialProductService from "../services/specialProductService.js";

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

// Controller to get a product by reference
export const getProductByReference = async (req, res) => {
    try {
        const product = await specialProductService.getProductByReference(req.params.reference);
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
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update a product by reference
export const updateProductByReference = async (req, res) => {
    try {
        const updatedProduct = await specialProductService.updateProductByReference(req.params.reference, req.body);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to delete a product by ID
export const deleteProductById = async (req, res) => {
    try {
        await specialProductService.deleteProductById(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to delete a product by reference
export const deleteProductByReference = async (req, res) => {
    try {
        await specialProductService.deleteProductByReference(req.params.reference);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get products by brand
export const getProductsByBrand = async (req, res) => {
    try {
        const products = await specialProductService.getProductsByBrand(req.params.brand);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get products in a specific price range
export const getProductsByPriceRange = async (req, res) => {
    try {
        const { minPrice, maxPrice } = req.query;
        const products = await specialProductService.getProductsByPriceRange(minPrice, maxPrice);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update product stock
export const updateProductStock = async (req, res) => {
    try {
        const updatedProduct = await specialProductService.updateProductStock(req.params.reference, req.body.quantity);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
