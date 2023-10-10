import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Base } from './Base'
import { Wallet } from './Wallet'

@Entity()
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


    @OneToOne(() => Wallet, (wallet) => wallet.user,{eager: true, cascade: true})
    @JoinColumn()
    wallet!: Wallet
}
