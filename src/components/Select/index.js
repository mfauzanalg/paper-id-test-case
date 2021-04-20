import React from 'react';
import './index.scss';

const Select = ({ label, placeholder }) => {
  return (
    <div className="select-component">
      <div className="select-container">
        <label>{label}</label>
        <select>
          <option value="" disabled selected>
            Select your Account
          </option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
