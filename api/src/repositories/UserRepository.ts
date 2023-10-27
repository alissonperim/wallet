import { IUserRepository } from './interfaces/UserRepository'
import { User } from '../entities/User'
import { Repository } from 'typeorm'
import { CreateUserResponseDTO, ICreateUserParams } from '../entities/dto/users/interfaces'
import { createUserResponseDTO } from '../entities/dto/users/create'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @inject('Repository')
        private readonly context: Repository<User>
    ){}

    async create (params: ICreateUserParams): Promise<CreateUserResponseDTO> {
        const user = await this.context.save(this.context.create({ ...params }))
        return createUserResponseDTO(user)
    }
}
