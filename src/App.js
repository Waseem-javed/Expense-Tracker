import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';

import {GlobalProvider} from './context/GlobalState';
import './App.css';
function App() {
  return (
    <GlobalProvider>
      <div className="container-fluid h-100 bg-light">
      <div className="row align-items-center h-100">
        <div className="col-sm-6 col-md-6 col-lg-6 mt-1 p-4 mx-auto shadow-sm card small">
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction/>
        </div>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
