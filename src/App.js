import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transaction from "./pages/Transactions/Transaction";
import DefaultLayout from "./components/DefaultLayout";
import Confirmations from './pages/Transactions/Confirmations';
import AddTransactions from './pages/Transactions/AddTransactions';

const TransactionsTabs = () => {
  const location = useLocation();
  const currentTab = location.pathname.split('/')[2] || 'confirmed-balances';

  return (
    <div>
      <Tabs value={currentTab} aria-label="transactions tabs">
        <Tab label="Confirmed Balances" value="confirmed-balances" component={Link} to="/transactions/confirmed-balances" />
        <Tab label="Unconfirmed Balances" value="unconfirmed-balances" component={Link} to="/transactions/unconfirmed-balances" />
        <Tab label="Add Transactions" value="add-transactions" component={Link} to="/transactions/add-transactions" />
      </Tabs>
      <Routes>
        <Route path="confirmed-balances" element={<Confirmations />} />
        <Route path="unconfirmed-balances" element={<Transaction />} />
        <Route path="add-transactions" element={<AddTransactions />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <DefaultLayout>
              <Dashboard />
            </DefaultLayout>
          }
        />
        <Route
          path="/transactions/*"
          element={
            <DefaultLayout>
              <TransactionsTabs />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
