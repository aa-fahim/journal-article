import React from 'react';
import styles from './PurchaseScreen.module.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Paypal from '../../components/PayPal/Paypal';

function PurchaseScreen(props) {
  const { defaultDuration, defaultPrice, location } = props;

  let price = defaultPrice;
  let duration = defaultDuration;
  if (location.state) {
    const { duration: chosenDuration, price: chosenPrice } = location.state;
    duration = chosenDuration;
    price = chosenPrice;
  }

  return (
    <div className={styles['purchase-screen-container']}>
      <div className={styles['purchase-screen-wrapper']}>
        <Paypal price={price} duration={duration} />
      </div>
    </div>
  );
}

PurchaseScreen.propTypes = {
  location: PropTypes.object,
  defaultDuration: PropTypes.string,
  defaultPrice: PropTypes.string,
  duration: PropTypes.string,
  price: PropTypes.string,
};

PurchaseScreen.defaultProps = {
  defaultDuration: '1 Month',
  defaultPrice: '1:00',
};

export default withRouter(PurchaseScreen);
