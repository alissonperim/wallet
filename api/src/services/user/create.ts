import { CreateUserDTO, ICreateUserParams } from '../../entities/dto/users/interfaces'
import { IUserRepository } from '../../repositories/interfaces/UserRepository'
import { inject, injectable } from 'tsyringe'
import { ICreateUserService } from '../interfaces/UsersServicesInterface'
import { passwordHash } from '../../utils/passwordHash'

@injectable()
export class CreateUserService implements ICreateUserService {
    constructor(
        @inject('UsersRepository')
        private readonly usersRepository: IUserRepository
    ) {}

    async execute(params: ICreateUserParams): Promise<CreateUserDTO> {
        const { password } = params
        const pwHash = await passwordHash(password)

        return await this.usersRepository.create({...params, password: pwHash})
    }
}
