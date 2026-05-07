import { useState } from 'react'
import './App.css'
import Add from './components/Add.tsx'
import TransList from './components/TransList.tsx'
import Brief from './components/Brief.tsx'

import ExpCategories from './components/ExpCategories.tsx'
import type { Transaction } from './types/Transaction.ts'
import transactions from './data/script.ts'
import {AppContext} from './components/AppContext.tsx'




function App() {


    
  const [transactionList, setTransactionList] = useState<Transaction[]>(transactions);

  return (
    <>

    <AppContext.Provider value={{transactionList, setTransactionList}}>             

        <div className='bg-sky-100'>
          
          
          <h1 className='text-center mt-10 p-5 font-bold'>Personal Budjet Tracker</h1>

          <div className='flex justify-center'>
            <Add/>
            
          </div>

        <div className='flex ml-5'>
            <Brief/>
        </div>

        
        <div className='flex justify-center'>
            <TransList/>
        </div>

        <div className='flex justify-center'>
            <ExpCategories/>
        </div>
            
        </div>
      
      </AppContext.Provider>
     
    </>
  )
}

export default App
