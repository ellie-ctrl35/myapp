import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab  } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ConfirmedBalances from '../pages/AccountSummary/ConfirmedBalances';
import UnConfirmations from '../pages/AccountSummary/UnConfirmations';
import PendingSettlement from '../pages/AccountSummary/PendingSettlement';
import TransactionBalances from '../pages/AccountSummary/TransactionBalances';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000', // red color for the indicator
    },
  },
});

const AccountSummaryTabs = () => {
    const location = useLocation();
    const currentTab = location.pathname.split('/')[2] || 'confirmed-balances';
  
    return (
      <ThemeProvider theme={theme}> 
      <div>
        <Tabs value={currentTab} aria-label="Account Summary tabs" indicatorColor="primary"
        textColor="inherit"
        sx={{ '& .Mui-selected': { color: 'red' } }}>
          <Tab label="Confirmed Balances" value="confirmed-balances" sx={{ color: currentTab === 'confirmed-balances' ? 'red' : 'inherit' }} component={Link} to="/account-summary/confirmed-balances" />
          <Tab label="Unconfirmed Balances" value="unconfirmed-balances" sx={{ color: currentTab === 'unconfirmed-balances' ? 'red' : 'inherit' }} component={Link} to="/account-summary/unconfirmed-balances" />
          <Tab label="Pending Settlement" value="pending-settlement" sx={{ color: currentTab === 'pending-settlement' ? 'red' : 'inherit' }} component={Link} to="/account-summary/pending-settlement" />
          <Tab label="Transaction Balances" value="transaction-balances" sx={{ color: currentTab === 'transaction-balances' ? 'red' : 'inherit' }} component={Link} to="/account-summary/transaction-balances" />
        </Tabs>
        <Routes>
          <Route path="confirmed-balances" element={<ConfirmedBalances />} />
          <Route path="unconfirmed-balances" element={<UnConfirmations />} />
          <Route path="pending-settlement" element={<PendingSettlement />} />
          <Route path="transaction-balances" element={<TransactionBalances />} />
        </Routes>
      </div>
      </ThemeProvider>
    );
}

export default AccountSummaryTabs