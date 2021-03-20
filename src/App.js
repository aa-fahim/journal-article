import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Error from './pages/Error';
import Subscribe from './pages/Subscribe/Subscribe';
import SignUp from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import PurchaseScreen from './pages/PurchaseScreen/PurchaseScreen';

import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/(main)" component={DashboardContainer} />
            <Route component={DefaultContainer} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

const DefaultContainer = () => (
  <>
    <Navbar />
    <div className="app-container">
      <Switch>
        <Route exact path="/home">
          <Main />
        </Route>
        <Route path="/about" exact>
          there
        </Route>
        <Route path="/help" exact>
          friend
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/subscribe" exact>
          <Subscribe />
        </Route>
        <Route path="/subscribe/purchase" exact>
          <PurchaseScreen />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  </>
);

const DashboardContainer = () => (
  <Switch>
    <Route exact path="/main">
      <Dashboard />
    </Route>
  </Switch>
);

export default App;
