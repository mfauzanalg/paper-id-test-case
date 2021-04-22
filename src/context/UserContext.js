import { useState, createContext } from 'react';
import Cookie from 'js-cookie';
import ls from 'local-storage';
import moment from 'moment';

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: false,
    lastLogin: '',
    name: '',
    username: '',
    token: '',
  });

  const logOut = () => {
    Cookie.remove('token');
    ls.remove('data');
    setCurrentUser({
      isLoggedIn: false,
      lastLogin: '',
      name: '',
      username: '',
      token: '',
    });
  };

  const logIn = (response, token, username) => {
    Cookie.set('token', token);
    const userData = {
      isLoggedIn: true,
      lastLogin: moment(response.last_login),
      name: response.name,
      username: username,
      token,
    };
    setCurrentUser({
      ...userData,
      token: token,
    });
    ls.set('data', userData);
  };

  return (
    <UserContext.Provider value={{ currentUser, logIn, logOut }}>
      {props.children}
    </UserContext.Provider>
  );
};
