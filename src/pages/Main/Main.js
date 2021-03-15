import React from 'react';
import './Main.css';
import SubscriptionBox from './components/SubscriptionBox/SubscriptionBox';

function Main() {
  return (
    <div className="main-container">
      <div className="main-wrapper">
        <div className="text-content">
          <div className="header">
            Get Instant Access To Any Journal Article
          </div>
          <div className="sub-text">
            Give us the DOI, we&apos;ll do the rest
          </div>
        </div>
        <div className="subscription-wrapper">
          <SubscriptionBox />
        </div>
      </div>
    </div>
  );
}

export default Main;
