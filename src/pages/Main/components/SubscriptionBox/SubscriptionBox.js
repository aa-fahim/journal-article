import React from 'react';
import './SubscriptionBox.css';
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const subscribeButtonStyling = {
  color: 'white',
  backgroundColor: '#82b640',
  width: '100%',
  marginTop: '25px',
};

function SubscriptionBox() {
  const { highlightFeatures } = SubscriptionBox.constants.labels;

  const history = useHistory();

  const onSubscribeClickRedirect = () => {
    history.push('/subscribe');
  };

  const checkIcon = (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/480px-Light_green_check.svg.png"
      width="15"
      height="10"
      style={{ minWidth: '15px' }}
    />
  );

  return (
    <div className="subscription-box-container">
      <div className="header-text">For CAD</div>
      <div className="price-text-block">
        <div className="header-text-large">$1.00</div>
        <div className="header-text">/month</div>
      </div>
      <div className="faded-text">*local taxes may apply</div>
      {highlightFeatures.map((feature) => (
        <div className="feature" key={feature.key}>
          {checkIcon}
          <div className="feature-text">{feature.value}</div>
        </div>
      ))}
      <Button onClick={onSubscribeClickRedirect} style={subscribeButtonStyling}>
        Subscribe
      </Button>
    </div>
  );
}

SubscriptionBox.constants = {
  labels: {
    highlightFeatures: [
      {
        value: 'Access any article online',
        key: 1,
      },
      {
        value: 'PDF files emailed directly to you',
        key: 2,
      },
      {
        value: 'Unlimited requests',
        key: 3,
      },
    ],
  },
};

export default SubscriptionBox;
