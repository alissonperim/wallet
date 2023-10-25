import { CreateUserDTO, ICreateUserParams } from '../../entities/dto/users/interfaces'

export interface IUserRepository {
    create(params: ICreateUserParams): Promise<CreateUserDTO>
}
