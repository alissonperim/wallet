import { DeepPartial, Repository } from 'typeorm'
import { IBaseRepository } from './interfaces/Base'
import { AppDataSource } from '../data'
import { User } from '../entities/User'
import { Wallet } from '../entities/Wallet'

export interface IUser {
    name: string
    email: string
    password: string
    walletId: string
}

export class BaseRepository<T> implements IBaseRepository<T> {
    constructor(
        private readonly context: Repository<T> = AppDataSource.getRepository(T)
    ) {}
    async create(params: Partial<T>): Promise<T> {
        return this.context.save(this.context.create({...params}))
    }
}
