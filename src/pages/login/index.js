import React, { useEffect } from 'react';
import './index.scss';

import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import paperLogo from '../../assets/svgs/paperlogowhite.svg';
import checkLogo from '../../assets/svgs/checklogo.svg';
import accountLogo from '../../assets/svgs/accountlogowhite.svg';
import lockLogo from '../../assets/svgs/lockwhite.svg';
import { useSnackbar } from 'notistack';
import useAxios from '../../hooks/useAxios';

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { response, loading } = useAxios({
    method: 'post',
    url: 'https://development.paper.id:3500/test-case/api/v1/login',
    data: {
      username: 'muhammadfauzan11042021',
      password: 'paper123',
    },
  });

  useEffect(() => {
    if (!loading) {
      console.log(response);
    }
  }, [loading]);

  const onLogin = () => {
    enqueueSnackbar('login', {
      variant: 'success',
    });
  };

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
        <Button title="Masuk" color="green" width="100%" onClick={onLogin} />
      </div>
      <img className="paper-logo" src={paperLogo} alt="paper-logo" />
    </div>
  );
};

export default Login;
