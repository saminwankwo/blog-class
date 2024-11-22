import { Router } from 'express'
import { createPost, viewPost } from '../controllers/post.js'

const router = Router()

router.post('/addPost', createPost)
router.get('/posts', viewPost)

export default router