import React from 'react';
import './index.scss';

const FormInput = ({
  logo,
  label,
  placeholder,
  type,
  inputClass,
  value,
  onChange,
  onEnterPress,
}) => {
  const containerClass = `form-input-container ${inputClass}`;

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onEnterPress();
    }
  };

  return (
    <div className="form-input-component">
      <div className={containerClass}>
        <label>
          {logo && <img src={logo} alt="logo" />}
          {label}
        </label>
        <input
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
};

export default FormInput;
