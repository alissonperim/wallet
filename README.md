# Wallet

## Tabela de entidades

### User
- nome
- email
- password
- Wallet

### Expenses
- Category
- description
- amount
- User
- type [money, pix, creditCard, debitCard] -> Buscar cartões através do user.wallet.card
- if creditCard insert

### Category
- type
- estimatedExpensePerMonth

### Revenue -> Receita
- amount
- description
- User

### Wallet
- amount
- Card -> Relação OneToMany

### Card
- identifier -> Um nome que sirva para identificar o cartão
- lastDigits -> Somente os 4 últimos dígitos do cartão para facilitar a identificação
- type [creditCard, debtCard] -> Se o tipo do cartão for crédito adicionar o dia de pagamento da fatura
- dueDay
