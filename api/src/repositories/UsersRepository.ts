import { IUserRepository } from '../repositories/interfaces/UserRepository'
import { dataSource } from '../data'
import { User } from '../entities/User'
import { nanoIdGenerator } from '../helpers/generateNanoId'

export class UsersRepository implements IUserRepository {
    constructor(private readonly context = dataSource.getRepository<User>(User)){}

    async create (params: Partial<User>): Promise<User> {
        const id = nanoIdGenerator()
        const user = this.context.create({ id, ...params })
        return this.context.save(user)
    }
}
