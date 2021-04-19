import React from 'react';
import './index.scss';
import FinanceAccount from '../../components/FinanceAccount';

const dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="page-title">DASHBOARD</div>
      <div className="dashboard-container">
        <div className="chart-container">
          <div className="submenu-title">Transaction Summary</div>
        </div>
        <div className="account-container">
          <div className="submenu-title">Finance Account</div>
          <div className="finance-account-container">
            <FinanceAccount />
            <FinanceAccount />
            <FinanceAccount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
