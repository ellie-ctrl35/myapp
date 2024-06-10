import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import Transaction from '../pages/Transactions/Transaction';
import UnConfirmations from '../pages/AccountSummary/UnConfirmations';  
import PendingSettlement from '../pages/AccountSummary/PendingSettlement';
import AddTransactions from '../pages/Transactions/AddTransactions';


const TransactionsTabs = () => {
    const location = useLocation();
    const currentTab = location.pathname.split('/')[2] || 'confirmed-balances';
  
    return (
      <div>
        <Tabs value={currentTab} aria-label="transactions tabs">
          <Tab label="Confirmed Balances" value="confirmed-balances" component={Link} to="/transactions/confirmed-balances" />
          <Tab label="Unconfirmed Balances" value="unconfirmed-balances" component={Link} to="/transactions/unconfirmed-balances" />
          <Tab label="Pending Settlement" value="pending-settlement" component={Link} to="/transactions/pending-settlement" />
        </Tabs>
        <Routes>
          <Route path="confirmed-balances" element={<Transaction />} />
          <Route path="unconfirmed-balances" element={<UnConfirmations />} />
          <Route path="pending-settlement" element={<PendingSettlement />} />
        </Routes>
      </div>
    );
  };

  export default TransactionsTabs;