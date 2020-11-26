import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={`${transaction.amount< 0 ? 'text-danger' : 'text-success'} list-group-item py-1 d-flex justify-content-around align-items-center`}>
      {transaction.title} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn text-danger btn font-weight-bold" style={{position: 'absolute',right: '0'}}>X</button>
    </li>
  )
}
