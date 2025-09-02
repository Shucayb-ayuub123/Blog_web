import express from 'express'
import { addPosts, deletePosts, getPost, getPosts, updatePosts } from '../Controller/posts.js'

const router  = express.Router()

router.get("/getPost" , getPosts)
router.get("/getpost/:id" , getPost)
router.post("/addPost" , addPosts)
router.put( "posts/:id" , updatePosts)
router.delete("/DeletePost/:id" , deletePosts)

export default router