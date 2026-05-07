
import {AppContext} from './AppContext'
import { useContext, useState } from 'react'

function Add() {


  

  const {transactionList, setTransactionList} = useContext(AppContext);

  const [transType, setTransType] = useState<'expense' | 'income'>('income');
  const [transCategory, setTransCategory] = useState<string>('');
  const [transAmount, setTransAmount] = useState<number>(0);
  const [transDescription, setTransDescription] = useState<string>('');
  const [transDate, setTransDate] = useState<string>('');

  function AddNewTransaction() : void
  {
    debugger;
    if (transCategory != '' && transAmount > 0 && transDescription != '' &&  transDate != '')
    {
         setTransactionList([...transactionList, {
            id: Date.now(),
            amount: Number(transAmount),
            date: transDate,
            type: transType,
            category: transCategory,
            description: transDescription
      }]);

    }
    else
    {
        alert('One or more of the fields is not valid');
    }

    
    setTransCategory('');
    setTransAmount(0);
    setTransDescription('');
    setTransDate('');
     


  }

  
  return (
    <div className='bg-white w-100 h-115 m-10 flex-col p-5'>

      <div className='mb-2'>
          <h2>Type</h2>
          <select className='border-2 border-gray-400 w-full mt-2 p-1' value = {transType} onChange={(e)=>setTransType(e.target.value)}>
            <option value='expense'>Expence</option>
            <option value ='income'>Income</option>

          </select>
      </div>


      <div className='mb-2'>
          <h2>Category</h2>
          
          <input type='text' className='border-2 border-gray-400 w-full mt-2 p-1' value = {transCategory} 
          onChange={(e) => setTransType(e.target.value as 'expense' | 'income')}/>
      </div>


      <div className='mb-2'>
          <h2>Amount</h2>
          <input type='number' className='border-2 border-gray-400 w-full mt-2 p-1' value = {transAmount} onChange={(e)=>setTransAmount(e.target.value)}/>
      </div>


      <div className='mb-2'>
          <h2>Desctiption</h2>
          <input type='text' className='border-2 border-gray-400 w-full mt-2 p-1' value={transDescription} onChange={(e)=>setTransDescription(e.target.value)}/>
      </div>

       <div className='mb-2'>
          <h2>Date</h2>
          <input type='date'className='border-2 border-gray-400 w-full mt-2 p-1' value={transDate} onChange={(e)=>setTransDate(e.target.value)}/>
      </div>

      <button className='bg-blue-400 mt-2 p-1 text-white font-bold' onClick={()=>AddNewTransaction()}>Add Transaction</button>
      
    </div>
  )
}

export default Add
