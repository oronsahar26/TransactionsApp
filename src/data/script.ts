import type { Transaction } from './types/Transaction.ts'

const Transactions : Transaction[]= [
 {
        id: 1,
        amount: 500,
        date: '5.5.2026',
        type: 'expense',
        category: 'clothes',
        description: 'shirt'
  },
  {
        id: 2,
        amount: 700,
        date: '10.5.2026',
        type: 'expense',
        category: 'food',
        description: 'pizza'
  },
{
        id: 3,
        amount: 200,
        date: '10.5.2026',
        type: 'expense',
        category: 'food',
        description: 'apple'
  },
  
]


export default Transactions;