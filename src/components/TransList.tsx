import React, { useState } from 'react'
import {AppContext} from './AppContext'
import { useContext } from 'react'
import type { Transaction } from '../types/Transaction'

function TransList() {

  debugger;


  const {transactionList, setTransactionList} = useContext(AppContext);

  const [editState, setEditState] = useState<boolean>(false);

  function DeleteTransaction(id : number) : void {

    setTransactionList(transactionList.filter((item : Transaction)=>(item.id !=id )))


  }

  function EditTransaction(id : number) : void {




    setEditState(true);
    let newDescription = prompt('Insert New Description');

    // setTransactionList(transactionList.map((item: Transaction)=>{
    //   if (item.id === id){
    //     item.description = newDescription;
    //   }
    //   return item;
    // }));


    setTransactionList(transactionList.map((item: Transaction) => {
  if (item.id === id) {
    return { ...item, description: newDescription || '' }; // יצירת אובייקט חדש
  }
  return item;
}));






    setEditState(false);

  }
  
  return (
    <div className='w-full m-5'>
        
            <h2>Transactions</h2>

            {transactionList.map((item : Transaction )=> (

              <div className={`w-full p-3 flex justify-between ${item.type === 'income' ? 'bg-green-200' : 'bg-red-200'}`}>  
                <div>
                  <h3 className= {editState ? 'invisible' : 'visible'} > {item.description}</h3>

                  <h6 className='text-sm'>{item.category} - {item.date}</h6>

                </div>

                <div className='flex justify-between items-center'>
                  <h3 className='font-bold text-black mr-2'>₪ {item.amount}</h3>
                  <button className={`bg-blue-400 m-1 p-1 text-white font-bold rounded-lg ${editState ? 'hidden' : 'visible'}`} onClick={()=>EditTransaction(item.id)}>Edit</button>
                  <button className={`bg-red-600 m-1 p-1 text-white font-bold rounded-lg    ${editState ? 'hidden' : 'visible'}`} onClick={()=>DeleteTransaction(item.id)}>Delete</button>
                </div>      
                

              </div>



            ))}

           

          

    </div>
    
  )
}

export default TransList
