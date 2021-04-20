import React from 'react';
import './index.scss';

const Button = ({ title, color, size, onClick, addClass }) => {
  const classes = `${color} ${size} ${addClass}`;
  return (
    <div onClick={onClick} className="button-component">
      <div className={classes}>{title}</div>
    </div>
  );
};

export default Button;
