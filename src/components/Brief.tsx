import React, { useState } from 'react'
import {AppContext} from './AppContext'
import { useContext } from 'react'
import type { Transaction } from './types/Transaction.ts'

function Brief() {

  const {transactionList, setTransactionList} = useContext(AppContext);

    
  let totalIncome: number = 0;
  let totalExpense: number = 0;
  let totalSave: number = 0;

    for (let i = 0; i < transactionList.length; i++) {
        if (transactionList[i].type == 'income') {
            totalIncome += transactionList[i].amount;
        } else if (transactionList[i].type == 'expense') {
            totalExpense += transactionList[i].amount;
        }
    }

    totalSave = totalIncome - totalExpense; 

  

  
  return (
    <div className='flex left-0'>
        <div className='font-bold mr-5 text-green-600'>Total Income: {totalIncome}</div>
        <div className='font-bold mr-5 text-red-600'>Total Expense: {totalExpense}</div>
        <div className='font-bold mr-5'>Total Save: {totalSave}</div>
    </div>
  )
}

export default Brief
