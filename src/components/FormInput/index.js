import React from 'react';
import './index.scss';

const FormInput = ({ logo, label, placeholder, type, inputClass }) => {
  const containerClass = `form-input-container ${inputClass}`;
  return (
    <div className="form-input-component">
      <div className={containerClass}>
        <label>
          {logo && <img src={logo} alt="logo" />}
          {label}
        </label>
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormInput;
