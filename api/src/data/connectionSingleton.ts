import { DataSource } from 'typeorm'
import { AppDataSource } from '.'

export class AppDataSourceSingleton {
    dataSource: DataSource
    private static instance: AppDataSourceSingleton

    constructor() {
        this.dataSource = null
    }
    
    public static getInstance(): AppDataSourceSingleton {
        if (!this.instance) {
            this.instance = new this()
        }

        return this.instance
    }

    public static getRepository<T>(T: any) {
        return this.getInstance().dataSource.getRepository<T>(T)
    }

    async dbInstance(): Promise<DataSource> {
        this.dataSource = AppDataSource()
        if (!this.dataSource.isInitialized) {
            await this.dataSource.initialize()
        }

        return this.dataSource
    }
}
