import React,{ useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function Balance() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const totals = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className="d-flex">
            <h4>Balance : </h4>
            <h3 id="balance"> ${totals}</h3>
        </div>
    )
}

export default Balance;

