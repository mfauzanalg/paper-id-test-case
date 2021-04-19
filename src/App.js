import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
