import * as specialproductService from "../services/specialproductService.js"; // Adjust the path accordingly

// Controller to add a new product
export const addProductController = async (req, res) => {
    try {
        const productData = req.body; // Assuming product data is sent in the request body
        const newProduct = await specialproductService.addProduct(productData);
        res.status(201).json({
            message: "Product added successfully",
            product: newProduct,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Controller to get all products
export const getAllProductsController = async (req, res) => {
    try {
        const products = await specialproductService.getAllProducts();
        res.status(200).json({
            message: "Products fetched successfully",
            products,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Controller to get a product by its reference
export const getProductByReferenceController = async (req, res) => {
    try {
        const { reference } = req.params; // Get reference from URL parameter
        const product = await specialproductService.getProductByReference(reference);
        res.status(200).json({
            message: "Product fetched successfully",
            product,
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

// Controller to update a product by its reference
export const updateProductByReferenceController = async (req, res) => {
    try {
        const { reference } = req.params; // Get reference from URL parameter
        const updatedData = req.body; // Get updated data from request body
        const updatedProduct = await specialproductService.updateProductByReference(reference, updatedData);
        res.status(200).json({
            message: "Product updated successfully",
            product: updatedProduct,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Controller to delete a product by its reference
export const deleteProductByReferenceController = async (req, res) => {
    try {
        const { reference } = req.params; // Get reference from URL parameter
        const deletedProduct = await specialproductService.deleteProductByReference(reference);
        res.status(200).json({
            message: "Product deleted successfully",
            product: deletedProduct,
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

// Controller to get products by a specific brand
export const getProductsByBrandController = async (req, res) => {
    try {
        const { brand } = req.params; // Get brand from URL parameter
        const products = await specialproductService.getProductsByBrand(brand);
        res.status(200).json({
            message: "Products fetched by brand successfully",
            products,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Controller to get products in a specific price range
export const getProductsByPriceRangeController = async (req, res) => {
    try {
        const { minPrice, maxPrice } = req.query; // Get minPrice and maxPrice from query params
        const products = await specialproductService.getProductsByPriceRange(minPrice, maxPrice);
        res.status(200).json({
            message: "Products fetched by price range successfully",
            products,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Controller to update product stock
export const updateProductStockController = async (req, res) => {
    try {
        const { reference } = req.params; // Get reference from URL parameter
        const { quantity } = req.body; // Get quantity from request body
        const updatedProduct = await specialproductService.updateProductStock(reference, quantity);
        res.status(200).json({
            message: "Product stock updated successfully",
            product: updatedProduct,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
