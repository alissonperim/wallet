import { Wallet } from '../../../Wallet'

export interface ICreateUserParams {
    name: string
    email: string
    password: string
    passwordConfirmation: string
    wallet: Wallet
}

export type CreateUserDTO = Partial<ICreateUserParams>
