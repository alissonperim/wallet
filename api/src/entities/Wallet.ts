import { Column, Entity, OneToMany, OneToOne } from 'typeorm'
import { Base } from './Base'
import { Card } from './Card'
import { User } from './User'

@Entity()
export class Wallet extends Base {
    @Column(
        {
            type: 'decimal'
        }
    )
    amount!: number

    @OneToOne(() => User, (user) => user.wallet)
    user!: User
    
    @OneToMany(
        () => Card,
        (card) => card.wallet,
        {
            nullable: true
        }
    )
    cards?: Card[]
}
