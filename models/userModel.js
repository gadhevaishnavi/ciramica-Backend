import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  mobile: String,
  address: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);
export default User