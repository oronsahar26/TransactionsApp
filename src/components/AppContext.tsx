import { createContext, Dispatch, SetStateAction } from 'react';
import type { Transaction } from '../types/Transaction';

interface AppContextType {
  transactionList: Transaction[];
  setTransactionList: Dispatch<SetStateAction<Transaction[]>>;
}

// נותנים אובייקט ריק כ-initialValue ומבצעים casting לטיפוס הרצוי
export const AppContext = createContext<AppContextType>({
    transactionList: [],
    setTransactionList: () => {} 
});