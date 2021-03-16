import React from 'react';
import styles from './PurchaseScreen.module.css';
import PropTypes from 'prop-types';

function PurchaseScreen(props) {
  const { duration, price } = props.location.state;
  const { defaultDuration, defaultPrice } = props;

  return (
    <div className={styles['purchase-screen-container']}>
      <div className={styles['purchase-screen-wrapper']}>{duration}</div>
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

export default PurchaseScreen;
