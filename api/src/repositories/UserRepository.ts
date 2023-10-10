import { DeepPartial, Repository } from 'typeorm'
import { IBaseRepository, IUserRepository } from './interfaces/Base'
import { dataSource } from '../data'
import { User } from '../entities/User'
import { Wallet } from '../entities/Wallet'

export class UserRepository implements IUserRepository {
    constructor(private readonly context = dataSource.getRepository<User>(User)){}

    create (params: Partial<User>): Promise<User> {
        throw new Error('Method not implemented.')
    }
}
