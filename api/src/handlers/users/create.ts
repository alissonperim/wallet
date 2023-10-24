import { Request, Response } from 'express'
import { HttpResponse } from '../../utils/httpResponse'
import { container } from 'tsyringe'

export const handler = async (req: Request, res: Response) => {
    const service = container.resolve(U)
    return HttpResponse.created({ message: 'Hello World!' })
}
