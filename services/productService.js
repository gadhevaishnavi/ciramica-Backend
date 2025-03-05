import productModel from "../models/productModel.js";

// Service to add a new product
export const addProduct = async (productData) => {
    try {
        const newProduct = new productModel(productData);
        await newProduct.save();
        return newProduct;
    } catch (error) {
        throw new Error('Error adding product: ' + error.message);
    }
};

// Service to get all products
export const getAllProducts = async () => {
    try {
        return await productModel.find();
    } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
    }
};

// Service to get a product by ID
export const getProductById = async (id) => {
    try {
        const product = await productModel.findById(id);
        if (!product) throw new Error('Product not found');
        return product;
    } catch (error) {
        throw new Error('Error fetching product by ID: ' + error.message);
    }
};

// Service to update a product by ID
export const updateProductById = async (id, updatedData) => {
    try {
        const product = await productModel.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
        if (!product) throw new Error('Product not found');
        return product;
    } catch (error) {
        throw new Error('Error updating product by ID: ' + error.message);
    }
};

// Service to delete a product by ID
export const deleteProductById = async (id) => {
    try {
        const deletedProduct = await productModel.findByIdAndDelete(id);
        if (!deletedProduct) throw new Error('Product not found');
        return deletedProduct;
    } catch (error) {
        throw new Error('Error deleting product by ID: ' + error.message);
    }
};



