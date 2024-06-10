import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import Transaction from '../pages/Transactions/Transaction';
import AddTransactions from '../pages/Transactions/AddTransactions';
import Confirmations from '../pages/Transactions/Confirmations';


const TransactionsTabs = () => {
    const location = useLocation();
    const currentTab = location.pathname.split('/')[2] || 'confirmed-balances';
  
    return (
      <div>
        <Tabs value={currentTab} aria-label="transactions tabs">
          <Tab label="Review" value="review" component={Link} to="/transactions/review" />
          <Tab label="Confirmations" value="confirmations" component={Link} to="/transactions/confirmations" />
          <Tab label="Add Transactions" value="add-transactions" component={Link} to="/transactions/add-transactions" />
        </Tabs>
        <Routes>
          <Route path="review" element={<Transaction />} />
          <Route path="confirmations" element={<Confirmations />} />
          <Route path="add-transactions" element={<AddTransactions />} />
        </Routes>
      </div>
    );
  };

  export default TransactionsTabs;