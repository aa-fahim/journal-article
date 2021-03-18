import React, { useState } from 'react';
import styles from './SubscriptionPlan.module.css';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const subscribeButtonStyling = {
  color: 'white',
  backgroundColor: '#82b640',
  width: '100%',
  marginTop: '25px',
};

function SubscriptionPlan(props) {
  const history = useHistory();

  const handleCheckout = () => {
    const { price, duration } = props;
    console.log(price, duration);
    history.push({
      pathname: '/subscribe/purchase',
      state: { price: price, duration: duration },
    });
  };

  return (
    <div className={styles['subscription-plan-container']}>
      <div className={styles['header-text']}>{props.duration}</div>
      <div className={styles['header-text-large']}>{props.price}</div>
      <div className={styles['header-text']}> {props.perDuration}</div>
      <Button onClick={handleCheckout} style={subscribeButtonStyling}>
        Choose Plan
      </Button>
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
