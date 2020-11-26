import React,{ useContext} from 'react';
import{ GlobalContext} from '../context/GlobalState';

function IncomeExpenses() {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(item => item>0).reduce((acc, item) =>(acc+=item),0).toFixed(2)
    const expense = (amounts.filter(item => item<0).reduce((acc, item) =>(acc+=item),0)* -1).toFixed(2)
    return (
        <div className="d-flex justify-content-around border shadow-sm mb-2">
            <div className="text-center mt-2">
                <h5 className="text-success">INCOME</h5>
                <p id="money-plus" className="money plus">{income}</p>
            </div>
            <div className="text-center mt-2">
                <h5 className="text-danger">EXPENSE</h5>
                <p id="money-minus" className="money minus">{expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
