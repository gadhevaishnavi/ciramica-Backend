import productModel from "../models/productModel.js";

// Create a new product
export const createProduct = async (productData) => {
    try {
        const newProduct = new productModel(productData);
        return await newProduct.save();
    } catch (error) {
        throw new Error(`Error creating product: ${error.message}`);
    }
};

// Get all products
export const getAllProducts = async () => {
    try {
        return await productModel.find();
    } catch (error) {
        throw new Error(`Error fetching products: ${error.message}`);
    }
};

// Get a product by ID
export const getProductById = async (id) => {
    try {
        return await productModel.findById(id);
    } catch (error) {
        throw new Error(`Error fetching product by ID: ${error.message}`);
    }
};

// Get a product by reference
export const getProductByReference = async (reference) => {
    try {
        return await productModel.findOne({ reference });
    } catch (error) {
        throw new Error(`Error fetching product by reference: ${error.message}`);
    }
};

// Update a product by reference
export const updateProductByReference = async (reference, updatedData) => {
    try {
        const updatedProduct = await productModel.findOneAndUpdate(
            { reference },
            updatedData,
            { new: true }
        );
        if (!updatedProduct) {
            throw new Error("Product not found");
        }
        return updatedProduct;
    } catch (error) {
        throw new Error(`Error updating product: ${error.message}`);
    }
};

// Delete a product by reference
export const deleteProductByReference = async (reference) => {
    try {
        const deletedProduct = await productModel.findOneAndDelete({ reference });
        if (!deletedProduct) {
            throw new Error("Product not found");
        }
        return deletedProduct;
    } catch (error) {
        throw new Error(`Error deleting product: ${error.message}`);
    }
};

// Get products by brand
export const getProductsByBrand = async (brand) => {
    try {
        return await productModel.find({ brand });
    } catch (error) {
        throw new Error(`Error fetching products by brand: ${error.message}`);
    }
};

// Get products in stock
export const getProductsInStock = async () => {
    try {
        return await productModel.find({ stock: { $gt: 0 } });
    } catch (error) {
        throw new Error(`Error fetching products in stock: ${error.message}`);
    }
};

// Search for products by name or description
export const searchProducts = async (query) => {
    try {
        return await productModel.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
            ],
        });
    } catch (error) {
        throw new Error(`Error searching for products: ${error.message}`);
    }
};
