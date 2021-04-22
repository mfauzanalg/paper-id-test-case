/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './pages/login';
import dashboard from './pages/dashboard';
import finance from './pages/finance';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ls from 'local-storage';
import { UserContext } from './context/UserContext';

const NavRoute = ({ path, component: Component }) => (
  <Route
    exact
    path={path}
    render={(props) => (
      <div className="sidebar">
        <Sidebar />
        <div className="sidebar-content">
          <Navbar />
          <Component {...props} />
        </div>
      </div>
    )}
  />
);

function App() {
  useEffect(() => {
    const userData = ls.get('data');
    if (userData) logIn(userData);
  }, []);

  const { logIn } = useContext(UserContext);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
          <NavRoute component={dashboard} path="/dashboard" />
          <NavRoute component={finance} path="/finance" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
