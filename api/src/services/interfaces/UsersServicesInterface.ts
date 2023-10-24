import { CreateUserDTO, ICreateUserParams } from '../../entities/dto/users/interfaces'

export interface ICreateUserService {
    execute(params: ICreateUserParams): Promise<CreateUserDTO>
}
