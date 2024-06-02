import React, { useState } from 'react'
import "./WalletExpenseComponent.css"
import Modal from 'react-modal';




Modal.setAppElement("#root");
const WalletExpenseComponent = ({walletBalance,setWalletBalance,expenses,setExpenses}) => {


    const customStyles = {
        content: {
        
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          color:"black",
          width:"40%",
          backgroundColor:"rgba(239, 239, 239, 0.85)"
        },
      };

      const categories = [
        "Food",
        "Entertainment",
        "Travel",
        "Shopping",
        "Grocery",
        "Others",
      ];


    const [walletModalIsOpen, setWalletModalIsOpen] = useState(false);
    const [expenseModalIsOpen, setExpenseModalIsOpen] = useState(false);
    
const [newExpense, setNewExpense] = useState({
    id: null,
    title: "",
    price: "",
    category: "",
    date: "",
  });

  
  const [newIncome, setNewIncome] = useState("");


    const handleOpenWalletModal = () => {
        setWalletModalIsOpen(true);
    };


    const addIncome =(e)=>{
        e.preventDefault();
        
       
       
    }

    const hanldeOpenExpenseModal =()=>{
        setExpenseModalIsOpen(true);
    }


    const handleInputChange =(e,isExpense = true)=>{
        if(isExpense){
            setNewExpense({...newExpense,[e.target.name]:e.target.value})
        }
        else{
            setNewIncome(e.target.value)
        }
    }


      
  return (
    <div className="wallet-expense-container">
        <div className='wallet-income-expense-container'>

        
        <div className='wallet-conatiner'>
            <h2>Wallet Balance : <span style={{color:"rgba(157, 255, 91, 1)"}} >₹4000</span> </h2>

            <button className='add-income-button' onClick={handleOpenWalletModal}>+ Add Income</button>
             
        </div>

        <div className='expense-container'>
            <h2>Expenses : <span style={{color:"rgba(244, 187, 74, 1)"}}>₹500</span> </h2>
            <button className='add-expense-button' onClick={hanldeOpenExpenseModal}>+ Add Expense</button>
        </div>

        {/* wallet modal dialog */}
        <Modal
          isOpen={walletModalIsOpen}
          
          onRequestClose={()=>setWalletModalIsOpen(false)}
          style={customStyles}
          contentLabel="Add Wallet Balance"
        >

           <h2>Add Balnace</h2>

           <form className='modal-form-wallet'>
              <input type="number" placeholder='Income Amount' required onChange={(e)=>handleInputChange(e,false)}/>

              <div className='modal-wallet-buttons'>
                <button type='submit' onClick={(e)=>addIncome(e)}>
                    Add Balance
                </button>

                <button onClick={()=>setWalletModalIsOpen(false)}>Cancel</button>
              </div>
           </form>



             
        </Modal>


        {/* Expnese Modal Dialog */}

        <Modal
         isOpen={expenseModalIsOpen}
       
         onRequestClose={()=>setExpenseModalIsOpen(false)}
         style={customStyles}
         contentLabel="Add Expenses"
        >
         <h2>Add Expenses</h2>
         <form className='modal-form-expenses'>
         <input type="text" name='title' placeholder='Title' onChange={(e)=>handleInputChange(e,true)}/>
         <input type="number" name='price' placeholder='Price'  onChange={(e)=>handleInputChange(e,true)}/>
      
         <input type="date"  name="date" onChange={(e)=>handleInputChange(e,true)}/>
         <select placeholder="Select Category" onChange={(e)=>handleInputChange(e,true)}>
             {categories.map((category,index)=>(
                 <option key={index}>{category}</option>
             ))}
         </select>

         <button type='submit'>Add Expense</button>
         <button onClick={()=>setExpenseModalIsOpen(false)}>Cancel</button>
         </form>

       
        </Modal>

        </div>
    </div>
  )
}

export default WalletExpenseComponent
