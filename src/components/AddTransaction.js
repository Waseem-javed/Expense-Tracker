import React, { useState,useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
    const { addTransaction } = useContext(GlobalContext);
    const [title,setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    
    const submit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random() * 100000000),
            title,
            amount: +amount
        }

        addTransaction(newTransaction);
        setTitle('');
        setAmount(0);
    }

    return (
        <div>
            <fieldset className="border mt-2 mb-2 px-4">
                <legend className="text-center d-inline-block bg-dark text-white p-1">Add New Transaction</legend>
                <form onSubmit={submit} className="row">

                <div className="form-group col-sm-6">
                    <label htmlFor="text">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Enter Text.."/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="amount" className="small">Amount( Negative - Expenses, Positive - Income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control"placeholder="Enter Amount.." className="form-control"/>
                </div>
                <button className="btn btn-success btn-block mb-3">Add Transaction</button>
                </form>
                
            </fieldset>
            <div className="small text-center">
                    Developed By <i className="badge badge-info">Waseemjaved</i>
            </div>
        </div>
    )
}

export default AddTransaction
