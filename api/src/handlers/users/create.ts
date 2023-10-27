import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/create'
import { UserRepository } from '../../repositories/UserRepository'
import { User } from '../../entities/User'
import { AppDataSourceSingleton } from '../../data/connectionSingleton'

export const handler = async (req: Request, res: Response) => {
    const repository = new UserRepository(AppDataSourceSingleton.getRepository<User>(User))
    const service = new CreateUserService(repository)
    const user = await service.execute(req.body)
    // return HttpResponse.created(user)
    return res.status(201).json(user)
}
