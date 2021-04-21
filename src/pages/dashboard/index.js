/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './index.scss';
import FinanceAccount from '../../components/FinanceAccount';
import useAxios from '../../hooks/useAxios';

const Dashboard = () => {
  const { response, loading, error, fetch } = useAxios({
    method: 'get',
    url: '/finance-accounts?sort_field=id&sort_type=1&page=-1&per_page=-1',
  });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="dashboard-page">
      <div className="page-title">DASHBOARD</div>
      <div className="dashboard-container">
        <div className="chart-container">
          <div className="submenu-title">Transaction Summary</div>
        </div>
        <div className="account-container">
          <div className="submenu-title">Finance Account</div>
          {!loading && !error && (
            <div className="finance-account-container">
              {response.data.map((info) => {
                return <FinanceAccount data={info} key={info.id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
