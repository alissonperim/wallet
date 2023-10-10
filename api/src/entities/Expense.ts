import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Base } from './Base'
import { Category } from './Category'
import { Wallet } from './Wallet'

enum ExpenseType {
    MONEY = 'money',
    CREDIT_CARD = 'credit_card',
    DEBT_CARD = 'debt_card',
    PIX = 'pix'
}

enum InstallmentStatus {
    PAID = 'paid',
    UNPAID = 'unpaid',
    EXPIRED = 'expired'
}

@Entity()
export class Expense extends Base {
    @ManyToOne(
        () => Category,
        (category) => category.id
    )
    category!: Category

    @Column()
    description!: string

    @Column(
        {
            type: 'decimal'
        }
    )
    amount!: number

    @Column(
        {
            name: 'wallet_id',
        }
    )
    walletId!: string

    @ManyToOne(
        ()  => Wallet,
        (wallet) => wallet.id,
    )
    @JoinColumn(
        {
            name: 'wallet_id',
            referencedColumnName: 'id'
        }
    )
    wallet!: Wallet

    @Column(
        {
            type: 'enum',
            enum: ExpenseType,
        }
    )
    type!: ExpenseType

    @Column(
        {
            nullable: true
        }
    )
    installments?: number

    @Column(
        {
            name: 'installment_status',
            type: 'enum',
            enum: InstallmentStatus
        }
    )
    installmentStatus!: InstallmentStatus
}
