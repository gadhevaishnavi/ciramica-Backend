import blogModel from "../models/blogModel.js";  // Adjust the path as needed

// Service to create a new blog post
export const createBlogPost = async (data) => {
  try {
    const newBlogPost = new blogModel(data);
    return await newBlogPost.save();
  } catch (error) {
    throw new Error("Error creating blog post: " + error.message);
  }
};

// Service to get all blog posts
export const getAllBlogPosts = async () => {
  try {
    return await blogModel.find();  // Returns all blog posts
  } catch (error) {
    throw new Error("Error fetching blog posts: " + error.message);
  }
};

// Service to get a blog post by ID
export const getBlogPostById = async (id) => {
  try {
    const blogPost = await blogModel.findById(id);
    if (!blogPost) {
      throw new Error("Blog post not found");
    }
    return blogPost;
  } catch (error) {
    throw new Error("Error fetching blog post: " + error.message);
  }
};

// Service to update a blog post by ID
export const updateBlogPost = async (id, data) => {
  try {
    const updatedBlogPost = await blogModel.findByIdAndUpdate(id, data, { new: true });
    if (!updatedBlogPost) {
      throw new Error("Blog post not found to update");
    }
    return updatedBlogPost;
  } catch (error) {
    throw new Error("Error updating blog post: " + error.message);
  }
};

// Service to delete a blog post by ID
export const deleteBlogPost = async (id) => {
  try {
    const deletedBlogPost = await blogModel.findByIdAndDelete(id);
    if (!deletedBlogPost) {
      throw new Error("Blog post not found to delete");
    }
    return { message: "Blog post deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting blog post: " + error.message);
  }
};
