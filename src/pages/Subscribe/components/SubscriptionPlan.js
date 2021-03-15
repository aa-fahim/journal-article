import React from 'react';
import './SubscriptionPlan.css';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const subscribeButtonStyling = {
  color: 'white',
  backgroundColor: '#82b640',
  width: '100%',
  marginTop: '25px',
};

function SubscriptionPlan(props) {
  return (
    <div className="subscription-plan-container">
      <div className="header-text">{props.duration}</div>
      <div className="header-text-large">{props.price}</div>
      <div className="header-text"> {props.perDuration}</div>
      <Button style={subscribeButtonStyling}>Choose Plan</Button>
      <div className="faded-text">{props.autoNewalMsg}</div>
    </div>
  );
}

SubscriptionPlan.propTypes = {
  duration: PropTypes.string,
  price: PropTypes.string,
  perDuration: PropTypes.string,
  autoNewalMsg: PropTypes.string,
};

export default SubscriptionPlan;
