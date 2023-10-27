import { ICreateUserParams } from './interfaces'

export const createUserResponseDTO = ({
    name,
    email,
    wallet,
}: Partial<ICreateUserParams>) => {
    return {
        name,
        email,
        wallet
    }
}
