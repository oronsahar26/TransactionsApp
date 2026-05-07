import React from 'react'
import { AppContext } from './AppContext'
import { useContext, useState } from 'react'
import type { Transaction } from '../types/Transaction';


function ExpCategories() {

  debugger;

  const { transactionList } = useContext(AppContext);

  let expenses: Transaction[] = transactionList.filter((item : Transaction) => (item.type == 'expense'));

  let categoiesFull: string[] = expenses.map((item : Transaction) => (item.category));

  let distinctCategories: string[] = [...new Set(categoiesFull)];









  return (
    <div className='w-full m-5 bg-white p-3'>

      <h2 className='font-bold'>Expence Categories</h2>

      {distinctCategories.map((category : string) =>
      {          
        
          
          // let categorySum1 : number = expenses.reduce((sum, item)=>{
            
          //   if (item.category == category)
          //   {
          //     sum += item.amount; 
                             
          //   }
          //   return sum;
          //   }, 0);        


            let categorySum: number = 0;

            for (let i : number = 0; i < expenses.length ; i++)
            {
                if (expenses[i].category == category)
                {
                  categorySum += expenses[i].amount; 
                                
                }
            }            
             
          return <div className='flex justify-between mt-2'>
                    <h3 className='text-sm text-black mr-2'>{category}</h3>
                    <h3 className='text-sm text-black mr-2'>₪ {categorySum}</h3>
                </div>

      }
      )}




    </div>
  )
}

export default ExpCategories
