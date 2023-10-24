import { CreateUserDTO, ICreateUserParams } from '../../entities/dto/users/interfaces'
import { IUserRepository } from '../../repositories/interfaces/UserRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private readonly usersRepository: IUserRepository
    ) {}

    async execute(params: ICreateUserParams): Promise<CreateUserDTO> {
        const user = await this.usersRepository.create(params)
        return null
    }
}
