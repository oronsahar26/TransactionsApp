import { createContext, Dispatch, SetStateAction } from 'react';
import type { Transaction } from '../types/Transaction';

interface AppContextType {
  transactionList: Transaction[];
  setTransactionList: Dispatch<SetStateAction<Transaction[]>>;
}

// מתן ערך ברירת מחדל ריק כדי למנוע שגיאות unknown
export const AppContext = createContext<AppContextType>({
    transactionList: [],
    setTransactionList: () => {} 
});