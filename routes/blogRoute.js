import express from 'express';
import { createBlogPostController, getAllBlogPostsController,getBlogPostByIdController,updateBlogPostController, 
deleteBlogPostController } from '../controllers/blogController.js';  // Correct relative path

// Your route handling logic here

const blogRoute = express.Router();

// Route to create a new blog post
blogRoute.post('/blog', createBlogPostController);

// Route to get all blog posts
blogRoute.get('/blogs', getAllBlogPostsController);

// Route to get a single blog post by ID
blogRoute.get('/blog/:id', getBlogPostByIdController);

// Route to update a blog post by ID
blogRoute.put('/blog/:id', updateBlogPostController);

// Route to delete a blog post by ID
blogRoute.delete('/blog/:id', deleteBlogPostController);

export default blogRoute;
