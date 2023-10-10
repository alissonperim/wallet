import 'dotenv/config'
import { customAlphabet } from 'nanoid'

const { NANO_ID_ALPHABET } = process.env

export const nanoIdGenerator = (): string => {
    const nanoId = customAlphabet(NANO_ID_ALPHABET, 28)
    return nanoId()
}
