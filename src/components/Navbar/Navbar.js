import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './Navbar.css';

const subscribeButtonStyling = {
  backgroundColor: '#82b640',
  marginLeft: '20px',
  marginRight: '20px',
};

export default function Navbar() {
  const history = useHistory();
  const handleSignInRedirect = () => {
    history.push('/login');
  };
  const handleSubscribeRedirect = () => {
    history.push('/subscribe');
  };
  const handleHomePageRedirect = () => {
    history.push('/home');
  };

  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={handleHomePageRedirect}>
        Logo Placeholder
      </div>
      <div className="navbar-tabs">
        {/*
        <a className="navbar-tab" href="/main">
          Main
        </a>
        <a className="navbar-tab" href="/about">
          How it works
        </a>
        <a className="navbar-tab" href="/help">
          Help
        </a>
        */}
        <Button
          style={subscribeButtonStyling}
          onClick={handleSubscribeRedirect}
        >
          <div className="button-text">Subscribe</div>
        </Button>
        <Button color="blue" onClick={handleSignInRedirect}>
          <div className="button-text">Sign In</div>
        </Button>
      </div>
    </div>
  );
}
