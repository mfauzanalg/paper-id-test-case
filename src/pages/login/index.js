import React, { useEffect, useState } from 'react';
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

  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const { response, loading, error, fetch } = useAxios({
    method: 'post',
    url: '/login',
    data: userData,
  });

  useEffect(() => {
    if (!loading) {
      if (!error) {
        console.log(response);
        enqueueSnackbar('login', {
          variant: 'success',
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const onLogin = () => {
    if (userData.username && userData.password) {
      fetch();
    } else {
      enqueueSnackbar('Please fill all form!', {
        variant: 'warning',
      });
    }
  };

  const onFormChange = (e, attribut) => {
    const newUserData = { ...userData };
    newUserData[attribut] = e.target.value;
    setUserData(newUserData);
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
          value={userData['username']}
          onChange={(e) => onFormChange(e, 'username')}
        />
        <FormInput
          logo={lockLogo}
          label="Kata Sandi"
          placeholder="Masukkan Kata Sandi Anda"
          type="password"
          value={userData['password']}
          onChange={(e) => onFormChange(e, 'password')}
        />
        <div className="forgot-password">Lupa Kata Sandi?</div>
        <Button title="Masuk" color="green" width="100%" onClick={onLogin} />
      </div>
      <img className="paper-logo" src={paperLogo} alt="paper-logo" />
    </div>
  );
};

export default Login;
