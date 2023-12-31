import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm'
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

    @Index()
    @Column(
        {
            type: 'varchar',
            unique: true,
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
