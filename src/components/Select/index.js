import React from 'react';
import './index.scss';

const Select = ({ label, options, onChange, value }) => {
  console.log(String(value));

  return (
    <div className="select-component">
      <div className="select-container">
        <label>{label}</label>
        <select onChange={onChange} value={value ? String(value) : ''}>
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
