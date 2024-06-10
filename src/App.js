import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transaction from "./pages/Transactions/Transaction";
import DefaultLayout from "./components/DefaultLayout";
import UnConfirmations from './pages/AccountSummary/UnConfirmations';
import AddTransactions from './pages/Transactions/AddTransactions';
import PendingSettlement from './pages/AccountSummary/PendingSettlement';
import AccountSummaryTabs from './Tabs/AccountSummaryTabs';
import TransactionsTabs from './Tabs/TransactionsTab';

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
          path="/account-summary/*"
          element={
            <DefaultLayout>
              <AccountSummaryTabs />
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
