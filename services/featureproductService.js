import featureproductModel from '../models/featureproductModel.js'; // Adjust path based on your project structure

// Create a new feature product
 export const createFeatureProduct = async (productData) => {
    try {
        const newProduct = new featureproductModel(productData);
        await newProduct.save();
        return newProduct;
    } catch (error) {
        throw new Error('Error creating product: ' + error.message);
    }
};

// Get all feature products
export const getAllFeatureProducts = async () => {
    try {
        const products = await featureproductModel.find();
        return products;
    } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
    }
};

// Get a feature product by its ID
export const getFeatureProductById = async (productId) => {
    try {
        const product = await featureproductModel.findById(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error) {
        throw new Error('Error fetching product: ' + error.message);
    }
};

// Update a feature product by its ID
export const updateFeatureProduct = async (productId, updatedData) => {
    try {
        const updatedProduct = await featureproductModel.findByIdAndUpdate(productId, updatedData, { new: true });
        if (!updatedProduct) {
            throw new Error('Product not found');
        }
        return updatedProduct;
    } catch (error) {
        throw new Error('Error updating product: ' + error.message);
    }
};

// Delete a feature product by its ID
export const deleteFeatureProduct = async (productId) => {
    try {
        const deletedProduct = await featureproductModel.findByIdAndDelete(productId);
        if (!deletedProduct) {
            throw new Error('Product not found');
        }
        return deletedProduct;
    } catch (error) {
        throw new Error('Error deleting product: ' + error.message);
    }
};

// Get products by brand
export const getFeatureProductsByBrand = async (brand) => {
    try {
        const products = await featureproductModel.find({ brand });
        return products;
    } catch (error) {
        throw new Error('Error fetching products by brand: ' + error.message);
    }
};

// Get products within a certain price range
export const getFeatureProductsByPriceRange = async (minPrice, maxPrice) => {
    try {
        const products = await featureproductModel.find({ price: { $gte: minPrice, $lte: maxPrice } });
        return products;
    } catch (error) {
        throw new Error('Error fetching products by price range: ' + error.message);
    }
};


