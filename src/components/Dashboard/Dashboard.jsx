import React, { useState } from 'react'
import WalletExpenseComponent from '../WalletExpenseComponent/WalletExpenseComponent'

const Dashboard = () => {

const [walletBalance,setWalletBalance] = useState(localStorage.getItem('walletBalance')? JSON.parse(localStorage.getItem('walletBalance')):5000)
const [expenses, setExpenses] = useState(localStorage.getItem("expenses")?.length > 0? JSON.parse(localStorage.getItem("expenses")): [] );


  return (
    <div className='dashboard-container'>
      <h1>Expense Tracker</h1>
       <WalletExpenseComponent
          walletBalance={walletBalance}
          setWalletBalance={setWalletBalance}
          expenses={expenses}
          setExpenses={setExpenses}  
        />


    </div>
  )
}

export default Dashboard
