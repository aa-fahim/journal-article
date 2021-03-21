import React from 'react';
import './Home.css';
import SubscriptionBox from './components/SubscriptionBox/SubscriptionBox';

function Home() {
  return (
    <div className="home-container">
      <div className="home-wrapper">
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

export default Home;
