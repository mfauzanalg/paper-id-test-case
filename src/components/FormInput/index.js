import React from 'react';
import './index.scss';

const FormInput = ({ logo, label, placeholder, type }) => {
  return (
    <div className="form-input-component">
      <div className="form-input-container">
        <label>
          <img src={logo} alt="logo" />
          {label}
        </label>
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormInput;
