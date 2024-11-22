import { Router } from 'express'
import { addUser } from '../controllers/user.js'

const router = Router()

router.post('/addUser', addUser)
// router.post('/login')

export default router