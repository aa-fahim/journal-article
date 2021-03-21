import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Error from './pages/Error';
import Subscribe from './pages/Subscribe/Subscribe';
import SignUp from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import PurchaseScreen from './pages/PurchaseScreen/PurchaseScreen';
import MenuSidebar from './components/MenuSidebar/MenuSidebar';

import { AuthProvider } from './contexts/AuthContext';
import { CookiesProvider } from 'react-cookie';
import './App.css';

function App() {
  return (
    <div>
      <CookiesProvider>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/(main)" component={DashboardContainer} />
              <Route component={DefaultContainer} />
            </Switch>
          </AuthProvider>
        </Router>
      </CookiesProvider>
    </div>
  );
}

const DefaultContainer = () => (
  <>
    <Navbar />
    <div className="app-container">
      <Switch>
        <Route exact path="/home">
          <Home />
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
  <>
    <MenuSidebar />
    <Switch>
      <Route exact path="/main">
        <Dashboard />
      </Route>
    </Switch>
  </>
);

export default App;
