import React from 'react';
import './index.scss';

const FinanceAccount = () => {
  return (
    <div className="finance-account-component">
      <div className="left-container">F</div>
      <div className="right-container">
        <div>
          <span className="name"> Fauzan </span>
          <span className="status"> - Cash</span>
        </div>
        <div className="notes">New Account</div>
      </div>
    </div>
  );
};

export default FinanceAccount;
