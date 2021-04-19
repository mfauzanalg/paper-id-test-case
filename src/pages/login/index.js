import React from 'react';
import './index.scss';

import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

import paperLogo from '../../assets/svgs/paperlogowhite.svg';
import checkLogo from '../../assets/svgs/checklogo.svg';
import accountLogo from '../../assets/svgs/accountlogowhite.svg';
import lockLogo from '../../assets/svgs/lockwhite.svg';

const login = () => {
  return (
    <div className="login-page-container">
      <div className="login-container">
        <h1>
          Masuk ke Paper.id
          <img className="check-logo" src={checkLogo} alt="check-logo"></img>
        </h1>
        <div className="white-line" />
        <h4>
          Masuk dengan akun yang terdaftar di <br /> Paper.id/Payper
        </h4>
        <FormInput
          logo={accountLogo}
          label="Email"
          placeholder="Masukkan Email Anda"
          type="text"
        />
        <FormInput
          logo={lockLogo}
          label="Kata Sandi"
          placeholder="Masukkan Kata Sandi Anda"
          type="password"
        />
        <div className="forgot-password">Lupa Kata Sandi?</div>
        <Button title="Masuk" color="green" width="100%" />
      </div>
      <img className="paper-logo" src={paperLogo} alt="paper-logo" />
    </div>
  );
};

export default login;
