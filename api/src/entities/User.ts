import { Column, JoinColumn, OneToOne } from 'typeorm'
import { Base } from './Base'
import { Wallet } from './Wallet'

export class User extends Base {
    @Column(
        {
            type: 'varchar'
        }
    )
    name!: string

    @Column(
        {
            type: 'varchar'
        }
    )
    email!: string

    @Column(
        {
            type: 'varchar',
            length: '120'
        }
    )
    password!: string

    @Column(
        {
            name: 'wallet_id',
        }
    )
    walletId!: string

    @OneToOne(() => Wallet)
    @JoinColumn(
        {
            name: 'wallet_id',
            referencedColumnName: 'id',
        }
    )
    wallet!: Wallet
}
