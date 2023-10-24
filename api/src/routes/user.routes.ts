import { Router } from 'express'
import { handler } from '../handlers/users/create'

export const userRouter = Router()

userRouter.post('/', handler)
