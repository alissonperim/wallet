import { NextFunction, Request, Response } from 'express'
import { AppDataSourceSingleton } from '../data/connectionSingleton'

export const connectDB = async (req: Request, res: Response, next: NextFunction) => {
    await AppDataSourceSingleton.getInstance().dbInstance()
    next()
}
