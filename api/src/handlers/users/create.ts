import { Request, Response } from 'express'
import { HttpResponse } from '../../utils/httpResponse'
import { container } from 'tsyringe'
import { CreateUserService } from '../../services/user/create'

export const handler = async (req: Request, res: Response) => {
    const service = container.resolve(CreateUserService)
    const user = await service.execute(req.body)
    // return HttpResponse.created(user)
    return res.status(201).json(user)
}
