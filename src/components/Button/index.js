import React from 'react';
import './index.scss';

const Button = ({ title, color }) => {
  return (
    <div className="button-component">
      <div className={color}>{title}</div>
    </div>
  );
};

export default Button;
