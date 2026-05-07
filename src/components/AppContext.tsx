import { createContext, Dispatch, SetStateAction } from 'react';
import type { Transaction } from '../types/Transaction'; // ודא שהנתיב נכון

interface AppContextType {
  transactionList: Transaction[];
  setTransactionList: Dispatch<SetStateAction<Transaction[]>>;
}

// אנחנו מגדירים את ה-Context עם הטיפוס הנכון, ונותנים undefined כערך התחלתי
export const AppContext = createContext<AppContextType | undefined>(undefined);