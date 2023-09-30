import { Column, Entity, OneToMany } from 'typeorm'
import { Base } from './Base'
import { Card } from './Card'

@Entity()
export class Wallet extends Base {
    @Column(
        {
            type: 'double'
        }
    )
    amount!: number
    
    @Column()
    @OneToMany(
        () => Card,
        (card) => card.wallet,
        {
            nullable: true
        }
    )
    cards?: Card[]
}
