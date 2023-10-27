import { CreateUserResponseDTO, ICreateUserParams } from '../../entities/dto/users/interfaces'

export interface IUserRepository {
    create(params: ICreateUserParams): Promise<CreateUserResponseDTO>
}
