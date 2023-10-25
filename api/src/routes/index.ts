import '../container'
import { Router } from 'express'
import { userRouter } from './user.routes'
import { connectDB } from '../middlewares/connectDB'

export const routes = Router()

routes.use('/v1/users', connectDB, userRouter)
