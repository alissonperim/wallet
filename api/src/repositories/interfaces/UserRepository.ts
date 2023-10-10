import { User } from '../../entities/User'
import { IBaseRepository } from './Base'

export interface IUserRepository extends IBaseRepository<User> {}
