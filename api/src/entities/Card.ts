import { Column, Entity, Index, ManyToOne } from 'typeorm'
import { Base } from './Base'
import { Wallet } from './Wallet'

enum CardTypes {
    CREDIT_CARD = 'credit_card',
    DEBT_CARD = 'debit_card',
    ALIMENTATION_CARD = 'alimentation_card',
}

@Entity()
export class Card extends Base {
    @Column()
    identifier!: string

    @Column(
        {
            name: 'last_digits'
        }
    )
    lastDigits!: string

    @Column(
        {
            type: 'enum',
            enum: CardTypes
        }
    )
    types!: CardTypes

    @Column(
        {
            type: 'date',
            nullable: true,
        },
    )
    dueDay?: Date

    @Index()
    @ManyToOne(
        () => Wallet,
        (wallet) => wallet.cards,
        {
            nullable: true,
        },
    )
    wallet!: Wallet

}
