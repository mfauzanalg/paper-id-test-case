import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './pages/login';
import dashboard from './pages/dashboard';
import Sidebar from './components/Sidebar';

const NavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div className="sidebar">
        <Sidebar />
        <Component {...props} />
      </div>
    )}
  />
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
          <NavRoute exactly component={dashboard} pattern="/dashboard" />
          <NavRoute exactly component={dashboard} pattern="/finance" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
