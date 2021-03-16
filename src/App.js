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
          <Navbar />
          <div className="app-container">
            <Switch>
              <Route path="/main" exact>
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
              <Route path="/home" exact>
                <Dashboard />
              </Route>
              <Route exact path="/">
                <Redirect to="/main" />
              </Route>
              <Route>
                <Error />
              </Route>
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
