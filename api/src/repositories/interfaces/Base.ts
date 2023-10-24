export interface IBaseRepository<T> {
    create(params: Partial<T>): Promise<T>
}
