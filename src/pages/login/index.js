import React, { useEffect, useState, useContext } from 'react';
import './index.scss';

import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import paperLogo from '../../assets/svgs/paperlogowhite.svg';
import checkLogo from '../../assets/svgs/checklogo.svg';
import accountLogo from '../../assets/svgs/accountlogowhite.svg';
import lockLogo from '../../assets/svgs/lockwhite.svg';
import { useSnackbar } from 'notistack';
import useAxios from '../../hooks/useAxios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const { logIn } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [userData, setUserData] = useState({
    username: 'muhammadfauzan11042021',
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
        logIn(response, response.token, userData.username);
        enqueueSnackbar('login', {
          variant: 'success',
        });
        history.push('/dashboard');
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

  const forgotPassword = () => {
    enqueueSnackbar('Not Implemented :D', {
      variant: 'warning',
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
          onEnterPress={onLogin}
        />
        <div className="forgot-password">
          <span className="forgot-password-content" onClick={forgotPassword}>
            Lupa Kata Sandi?
          </span>
        </div>
        <Button title="Masuk" color="green" width="100%" onClick={onLogin} />
      </div>
      <img className="paper-logo" src={paperLogo} alt="paper-logo" />
    </div>
  );
};

export default Login;
