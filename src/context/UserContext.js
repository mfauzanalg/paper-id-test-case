import { useState, createContext } from 'react';
import Cookie from 'js-cookie';
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
    Cookie.remove('username');
    setCurrentUser({
      isLoggedIn: false,
      lastLogin: '',
      name: '',
      username: '',
      token: '',
    });
  };

  const logIn = (response, token, username) => {
    Cookie.set('token', response.token);
    Cookie.set('username', username);
    setCurrentUser({
      isLoggedIn: true,
      lastLogin: moment(response.last_login),
      name: response.name,
      username,
      token: token,
    });
  };

  return (
    <UserContext.Provider value={{ currentUser, logIn, logOut }}>
      {props.children}
    </UserContext.Provider>
  );
};
