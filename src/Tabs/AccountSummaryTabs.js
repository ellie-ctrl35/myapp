import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';
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
  const currentTab = location.pathname.split('/')[2] || 'confirmed-balances';

  const [openTabs, setOpenTabs] = useState(tabsData);

  const handleTabClose = (tabValue) => {
    setOpenTabs(openTabs.filter(tab => tab.value !== tabValue));
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
                    <AiOutlineClose fontSize="small" />
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
