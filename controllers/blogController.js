import { createBlogPost,getAllBlogPosts,getBlogPostById,updateBlogPost,deleteBlogPost} from "../services/blogService.js";  

// Controller to create a new blog post
export const createBlogPostController = async (req, res) => {
  try {
    const blogData = req.body;  // Get blog data from the request body
    const newBlogPost = await createBlogPost(blogData);  // Call service to create a blog post
    res.status(201).json(newBlogPost);  // Send success response with the created blog post
  } catch (error) {
    res.status(400).json({ error: error.message });  // Send error response if creation fails
  }
};

// Controller to get all blog posts
export const getAllBlogPostsController = async (req, res) => {
  try {
    const blogPosts = await getAllBlogPosts();  // Call service to get all blog posts
    res.status(200).json(blogPosts);  // Send success response with the list of blog posts
  } catch (error) {
    res.status(400).json({ error: error.message });  // Send error response if fetching fails
  }
};

// Controller to get a blog post by ID
export const getBlogPostByIdController = async (req, res) => {
  try {
    const { id } = req.params;  // Get the blog post ID from the request params
    const blogPost = await getBlogPostById(id);  // Call service to get blog post by ID
    res.status(200).json(blogPost);  // Send success response with the blog post
  } catch (error) {
    res.status(404).json({ error: error.message });  // Send error response if not found
  }
};

// Controller to update a blog post by ID
export const updateBlogPostController = async (req, res) => {
  try {
    const { id } = req.params;  // Get the blog post ID from the request params
    const updatedData = req.body;  // Get the updated data from the request body
    const updatedBlogPost = await updateBlogPost(id, updatedData);  // Call service to update blog post
    res.status(200).json(updatedBlogPost);  // Send success response with updated blog post
  } catch (error) {
    res.status(400).json({ error: error.message });  // Send error response if update fails
  }
};

// Controller to delete a blog post by ID
export const deleteBlogPostController = async (req, res) => {
  try {
    const { id } = req.params;  // Get the blog post ID from the request params
    const deleteResponse = await deleteBlogPost(id);  // Call service to delete blog post
    res.status(200).json(deleteResponse);  // Send success response with deletion message
  } catch (error) {
    res.status(400).json({ error: error.message });  // Send error response if deletion fails
  }
};
