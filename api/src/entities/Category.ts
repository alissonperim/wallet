import { Column, Entity } from 'typeorm'
import { Base } from './Base'


@Entity()
export class Category extends Base {
    @Column()
    name!: string

    @Column(
        {
            name: 'estimated_expense_per_month',
            type: 'decimal'
        }
    )
    estimatedExpensePerMonth!: number
}
