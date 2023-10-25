import { container } from 'tsyringe'
import { IUserRepository } from './repositories/interfaces/UserRepository'
import { UserRepository } from './repositories/UserRepository'

container.registerSingleton<IUserRepository>('UsersRepository', UserRepository)
