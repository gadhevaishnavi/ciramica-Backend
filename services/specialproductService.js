import specialproductModel from "../models/specialproductModel.js"; // Adjust the path accordingly

// Service to add a new product
export const addProduct = async (productData) => {
    try {
        const newProduct = new specialproductModel(productData);
        await newProduct.save();
        return newProduct;
    } catch (error) {
        throw new Error('Error adding product: ' + error.message);
    }
};

// Service to get all products
export const getAllProducts = async () => {
    try {
        const products = await specialproductModel.find();
        return products;
    } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
    }
};

// Service to get a product by its reference
export const getProductByReference = async (reference) => {
    try {
        const product = await specialproductModel.findOne({ reference });
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error) {
        throw new Error('Error fetching product: ' + error.message);
    }
};

// Service to update a product by its reference
export const updateProductByReference = async (reference, updatedData) => {
    try {
        const product = await specialproductModel.findOneAndUpdate(
            { reference },
            updatedData,
            { new: true, runValidators: true }
        );
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error) {
        throw new Error('Error updating product: ' + error.message);
    }
};

// Service to delete a product by its reference
export const deleteProductByReference = async (reference) => {
    try {
        const deletedProduct = await specialproductModel.findOneAndDelete({ reference });
        if (!deletedProduct) {
            throw new Error('Product not found');
        }
        return deletedProduct;
    } catch (error) {
        throw new Error('Error deleting product: ' + error.message);
    }
};

// Service to get products by a specific brand
export const getProductsByBrand = async (brand) => {
    try {
        const products = await specialproductModel.find({ brand });
        return products;
    } catch (error) {
        throw new Error('Error fetching products by brand: ' + error.message);
    }
};

// Service to get products in a specific price range
export const getProductsByPriceRange = async (minPrice, maxPrice) => {
    try {
        const products = await specialproductModel.find({
            price: { $gte: minPrice, $lte: maxPrice }
        });
        return products;
    } catch (error) {
        throw new Error('Error fetching products by price range: ' + error.message);
    }
};

// Service to update product stock
export const updateProductStock = async (reference, quantity) => {
    try {
        const product = await specialproductModel.findOne({ reference });
        if (!product) {
            throw new Error('Product not found');
        }
        product.stock += quantity;
        await product.save();
        return product;
    } catch (error) {
        throw new Error('Error updating stock: ' + error.message);
    }
};

