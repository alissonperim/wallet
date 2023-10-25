import { IUserRepository } from './interfaces/UserRepository'
import { User } from '../entities/User'
import { nanoIdGenerator } from '../helpers/generateNanoId'
import { AppDataSourceSingleton } from '../data/connectionSingleton'
import { Repository } from 'typeorm'

export class UserRepository implements IUserRepository {
    private readonly context: Repository<User> = 
        AppDataSourceSingleton.getInstance().dataSource.getRepository<User>(User)
    constructor(){}

    async create (params: Partial<User>): Promise<User> {
        console.log('ENTROU AQUI?!')
        const id = nanoIdGenerator()
        const user = this.context.create({ id, ...params })
        console.log('USER: ', user)
        return this.context.save(user)
    }
}
