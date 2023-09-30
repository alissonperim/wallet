import { User } from '../../entities/User'
import { Expense } from '../../entities/Expense'
import { Category } from '../../entities/Category'
import { Wallet } from '../../entities/Wallet'
import { Card } from '../../entities/Card'

export interface IBaseRepository<T> {
    create(params: Partial<T>): Promise<T>
}

export interface IUserRepository extends IBaseRepository<User> {}
export interface IExpensesRepository extends IBaseRepository<Expense> {}
export interface ICategoryRepository extends IBaseRepository<Category> {}
export interface IWalletRepository extends IBaseRepository<Wallet> {}
export interface ICardRepository extends IBaseRepository<Card> {}
