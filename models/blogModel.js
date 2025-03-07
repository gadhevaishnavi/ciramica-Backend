import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: {type: String,required: true,},
  description: {type: String,required: true,},
  category: {type: String,required: true,},
  date: {type: Date,default: Date.now,},
  image: {type: String,required: true,},
  readMoreLink: {type: String,},
});

const blogModel = mongoose.model("BlogPost", blogPostSchema)
export default blogModel;




