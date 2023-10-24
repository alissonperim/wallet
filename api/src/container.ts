import { container } from 'tsyringe'
import { IUserRepository } from './repositories/interfaces/UserRepository'
import { UsersRepository } from './repositories/UsersRepository'

container.registerSingleton<IUserRepository>('UsersRepository', UsersRepository)
