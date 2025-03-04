import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    brand: { type: String, required: true },
    reference: { type: String, unique: true, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    deliveryTime: { type: String },
    images: { type: [String], required:true}, // Array of image URLs
},);

const productModel = mongoose.model("letestProduct", productSchema);
export default productModel;
