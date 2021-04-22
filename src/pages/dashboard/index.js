/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './index.scss';
import FinanceAccount from '../../components/FinanceAccount';
import useAxios from '../../hooks/useAxios';
import Chart from '../../components/Chart';
import moment from 'moment';

const Dashboard = () => {
  const [dataMonthly, setdataMonthly] = useState({
    title: 'Amount of Spend Past 8 Months',
  });

  const [dataDaily, setDataDaily] = useState({
    title: 'Amount of Spend Past 8 Days',
  });

  const getMonthlyData = (rawData) => {
    const label = [];
    const data = new Array(8).fill(0);

    const current = moment();
    let n = 8;
    while (n > 0) {
      label.push(current.format('MMM YYYY'));
      current.subtract(1, 'month');
      n--;
    }
    label.reverse();

    rawData.forEach((item) => {
      let i;
      for (i = 0; i < 9; i++) {
        if (moment(item.created_at).format('MMM YYYY') === label[i]) {
          data[i] += item.debit_amount;
        }
      }
    });

    setdataMonthly({ data, label, ...dataMonthly });
  };

  const getDailyData = (rawData) => {
    const label = [];
    const data = new Array(8).fill(0);

    const current = moment();
    let n = 8;
    while (n > 0) {
      label.push(current.format('DD/MM/YYYY'));
      current.subtract(1, 'day');
      n--;
    }
    label.reverse();
    rawData.forEach((item) => {
      let i;
      for (i = 0; i < 9; i++) {
        if (moment(item.created_at).format('DD/MM/YYYY') === label[i]) {
          data[i] += item.debit_amount;
        }
      }
    });

    setDataDaily({ data, label, ...dataDaily });
  };
  const { response, loading, error, fetch } = useAxios({
    method: 'get',
    url: '/finance-accounts?sort_field=id&sort_type=-1&page=-1&per_page=-1',
  });

  const {
    response: responseTransaction,
    loading: loadingTransaction,
    error: errorTransaction,
    fetch: fetchTransaction,
  } = useAxios({
    method: 'get',
    url: '/finances?sort_field=created_at&sort_type=1&page=-1&per_page=-1',
  });

  useEffect(() => {
    fetch();
    fetchTransaction();
  }, []);

  useEffect(() => {
    if (!loading && !loadingTransaction) {
      if (!error && !errorTransaction) {
        getMonthlyData(responseTransaction.data);
        getDailyData(responseTransaction.data);
      }
    }
  }, [loading, loadingTransaction]);

  return (
    <div className="dashboard-page">
      <div className="page-title">DASHBOARD</div>
      <div className="dashboard-container">
        <div className="chart-container">
          <div className="submenu-title">Transaction Summary</div>
          {!loading && !loadingTransaction && !error && (
            <div className="charts">
              <Chart details={dataMonthly} className="bar" />
              <Chart details={dataDaily} className="bar" />
            </div>
          )}
        </div>
        <div className="account-container">
          <div className="submenu-title">Finance Account</div>
          {!loading && !loadingTransaction && !error && (
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
