import React from 'react';
import './index.scss';
import { stringFormatter } from '../../utils';

const FinanceAccount = ({ data }) => {
  const textAbove = `${data.name} _ ${data.type}`;
  const formattedTextAbove = stringFormatter(textAbove);
  const splittedTextAbove = formattedTextAbove.split('_');
  const description = stringFormatter(data.Description);
  return (
    <div className="finance-account-component">
      <div className="left-container">{data.name[0]}</div>
      <div className="right-container">
        <div>
          <span className="name">{splittedTextAbove[0]}</span>
          <span className="status">
            {splittedTextAbove[1] && `- ${splittedTextAbove[1]}`}
          </span>
        </div>
        <div className="notes">{description}</div>
      </div>
    </div>
  );
};

export default FinanceAccount;
