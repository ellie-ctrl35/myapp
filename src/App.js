import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transaction from "./pages/Transactions/Transaction";
import DefaultLayout from "./components/DefaultLayout";
import Confirmations from './pages/Transactions/Confirmations';
import AddTransactions from './pages/Transactions/AddTransactions';

function App() {
  return (
    <BrowserRouter>
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
                <Route path="/" element={<Transaction />} />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;