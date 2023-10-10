import { Column, Entity, ManyToOne } from 'typeorm'
import { Base } from './Base'
import { Card } from './Card'

enum InstallmentStatus {
    PENDING = 'pending',
    PAID = 'paid',
}

@Entity()
export class Installments extends Base {
    @ManyToOne(() => Card, (card) => card.id)
    card!: Card

    @Column(
        {
            type: 'decimal'
        }
    )
    amount!: number

    @Column()
    installments!: number

    @Column()
    installment!: number

    @Column(
        {
            name: 'installment_status',
            type: 'enum',
            enum: InstallmentStatus
        }
    )
    status!: InstallmentStatus

    @Column(
        {
            name: 'payment_date',
            type: 'date'
        }
    )
    paymentDate!: Date
}
