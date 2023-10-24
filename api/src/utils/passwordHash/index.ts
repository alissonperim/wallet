import 'dotenv/config'
import bcrypt from 'bcrypt'

const {
    SALT,
} = process.env

export const passwordHash = async (password: string) => {
    return bcrypt.hash(password, +SALT)
}
