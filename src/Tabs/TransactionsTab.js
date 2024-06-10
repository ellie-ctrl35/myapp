import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Transaction from '../pages/Transactions/Transaction';
import AddTransactions from '../pages/Transactions/AddTransactions';
import Confirmations from '../pages/Transactions/Confirmations';

const theme = createTheme({
  palette: {
    primary: {
      main: '#930006', // red color for the indicator
    },
  },
});

const TransactionsTabs = () => {
    const location = useLocation();
    const currentTab = location.pathname.split('/')[2] || 'confirmed-balances';
  
    return (
      <ThemeProvider theme={theme}>
      <div>
        <Tabs value={currentTab} aria-label="transactions tabs" style={{background:"#F3F5F7"}}>
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
      </ThemeProvider>
    );
  };

  export default TransactionsTabs;