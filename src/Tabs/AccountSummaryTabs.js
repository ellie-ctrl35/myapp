import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import ConfirmedBalances from '../pages/AccountSummary/ConfirmedBalances';
import UnConfirmations from '../pages/AccountSummary/UnConfirmations';
import PendingSettlement from '../pages/AccountSummary/PendingSettlement';
import TransactionBalances from '../pages/AccountSummary/TransactionBalances';

const AccountSummaryTabs = () => {
    const location = useLocation();
    const currentTab = location.pathname.split('/')[2] || 'confirmed-balances';
  
    return (
      <div>
        <Tabs value={currentTab} aria-label="Account Summary tabs">
          <Tab label="Confirmed Balances" value="confirmed-balances" component={Link} to="/transactions/confirmed-balances" />
          <Tab label="Unconfirmed Balances" value="unconfirmed-balances" component={Link} to="/transactions/unconfirmed-balances" />
          <Tab label="Pending Settlement" value="pending-settlement" component={Link} to="/transactions/pending-settlement" />
          <Tab label="Transaction Balances" value="transaction-balances" component={Link} to="/transactions/transactions-balances" />
        </Tabs>
        <Routes>
          <Route path="confirmed-balances" element={<ConfirmedBalances />} />
          <Route path="unconfirmed-balances" element={<UnConfirmations />} />
          <Route path="pending-settlement" element={<PendingSettlement />} />
          <Route path="transaction-balances" element={<TransactionBalances />} />
        </Routes>
      </div>
    );
}

export default AccountSummaryTabs