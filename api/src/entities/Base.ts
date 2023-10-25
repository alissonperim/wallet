import { CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Base {
    @PrimaryColumn()
    id!: string

    @CreateDateColumn(
        {
            name: 'created_at',
            default: new Date()
        }
    )
    createdAt!: Date

    @UpdateDateColumn(
        {
            name: 'updated_at',
            default: new Date()
        }
    )
    updatedAt!: Date
}
