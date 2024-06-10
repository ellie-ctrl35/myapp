import React, { useState } from 'react';
import { useLocation, useNavigate, Link, Routes, Route } from 'react-router-dom';
import { Tabs, Tab, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiOutlineCloseCircle } from '@react-icons/all-files/ai/AiOutlineCloseCircle';
import ConfirmedBalances from '../pages/AccountSummary/ConfirmedBalances';
import UnConfirmations from '../pages/AccountSummary/UnConfirmations';
import PendingSettlement from '../pages/AccountSummary/PendingSettlement';
import TransactionBalances from '../pages/AccountSummary/TransactionBalances';

const theme = createTheme({
  palette: {
    primary: {
      main: '#930006', // red color for the indicator
    },
  },
});

const tabsData = [
  { label: "Confirmed Balances", value: "confirmed-balances", component: ConfirmedBalances },
  { label: "Unconfirmed Balances", value: "unconfirmed-balances", component: UnConfirmations },
  { label: "Pending Settlement", value: "pending-settlement", component: PendingSettlement },
  { label: "Transaction Balances", value: "transaction-balances", component: TransactionBalances },
];

const AccountSummaryTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentTab = location.pathname.split('/')[2] || 'confirmed-balances';

  const [openTabs, setOpenTabs] = useState(tabsData);

  const handleTabClose = (tabValue) => {
    setOpenTabs(prevTabs => {
      const newTabs = prevTabs.filter(tab => tab.value !== tabValue);
      if (currentTab === tabValue && newTabs.length > 0) {
        // Navigate to the first tab if the current tab is closed
        navigate(`/account-summary/${newTabs[0].value}`);
      } else if (newTabs.length === 0) {
        // Navigate to a fallback route if no tabs are open
        navigate('/dashboard');
      }
      return newTabs;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Tabs value={currentTab} aria-label="Account Summary tabs" style={{background:"#F3F5F7"}}>
          {openTabs.map(tab => (
            <Tab
              key={tab.value}
              label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {tab.label}
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTabClose(tab.value);
                    }}
                  >
                    <AiOutlineCloseCircle fontSize="small" color='#930006' />
                  </IconButton>
                </div>
              }
              value={tab.value}
              component={Link}
              to={`/account-summary/${tab.value}`}
            />
          ))}
        </Tabs>
        <Routes>
          {openTabs.map(tab => (
            <Route key={tab.value} path={tab.value} element={<tab.component />} />
          ))}
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default AccountSummaryTabs;
