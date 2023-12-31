import { DataSource } from 'typeorm'
import { User } from '../entities/User'
import { Wallet } from '../entities/Wallet'
import { Card } from '../entities/Card'
import { Category } from '../entities/Category'
import { Installments } from '../entities/Installments'
import { Expense } from '../entities/Expense'

export const AppDataSource = () => {
    return new DataSource({
        type: 'postgres',
        host: 'wallet-db',
        port: 5432,
        username: 'wallet',
        password: '123456',
        database: 'wallet',
        entities: [
            User,
            Wallet,
            Card,
            Category,
            Installments,
            Expense
        ],
        migrations: [
            'src/data/migrations/*.ts'
        ]
    })
}

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'wallet',
    password: '123456',
    database: 'wallet',
    entities: [
        User,
        Wallet,
        Card,
        Category,
        Installments,
        Expense
    ],
    migrations: [
        'src/data/migrations/*.ts'
    ]
})
