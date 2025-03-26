import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    mobile: String,
    address: String,
    password: String
});

const userModel = mongoose.model('User', userSchema);
export default userModel;