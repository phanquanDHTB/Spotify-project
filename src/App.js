
import './App.scss';
import LoginForm from './pages/login/components/form/Form';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Switch } from 'react-router-dom';
import RegisterForm from './pages/register/components/form/Form';
import Home from './pages/home/home';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Redirect to="/login" component={LoginForm}></Redirect> */}
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          {/* <Route path="/" component={Home} /> */}
          <Route path='/' component={Home} />
          {/* <PrivateRoute path='/' component={Product} />
          <PrivateRoute path='/' component={Cart} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
