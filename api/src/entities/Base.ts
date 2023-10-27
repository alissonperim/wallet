import { CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { nanoIdGenerator } from '../helpers/generateNanoId'

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

    constructor() {
        if (!this.id) {
            this.id = nanoIdGenerator()
        }
        
    }
}
