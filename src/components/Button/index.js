import React from 'react';
import './index.scss';

const Button = ({ title, color, size }) => {
  const classes = `${color} ${size}`;
  return (
    <div className="button-component">
      <div className={classes}>{title}</div>
    </div>
  );
};

export default Button;
