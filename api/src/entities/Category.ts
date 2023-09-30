import { Column, Entity } from 'typeorm'
import { Base } from './Base'


@Entity()
export class Category extends Base {
    @Column()
    types!: string

    @Column(
        {
            name: 'estimated_expense_per_month',
            type: 'double'
        }
    )
    estimatedExpensePerMonth!: number
}
