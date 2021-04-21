import React from 'react';
import './index.scss';

const Select = ({ label, options, onChange }) => {
  return (
    <div className="select-component">
      <div className="select-container">
        <label>{label}</label>
        <select onChange={onChange} defaultValue="">
          <option value="" disabled>
            Select your Account
          </option>
          {options.map((option) => {
            return (
              <option value={option.id} key={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
