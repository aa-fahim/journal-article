import React, { useRef, useEffect } from 'react';
import styles from './Paypal.module.css';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

function Paypal(props) {
  const [cookies, setCookie] = useCookies(['didUserPurchase']);
  const paypal = useRef();
  const history = useHistory();

  const handleSignUpRedirect = () => {
    history.push('/sign-up');
  };

  useEffect(() => {
    const { duration, price } = props;
    const paypalDuration = duration || '1 month';
    const paypalPrice = price || Number(1);
    const purchaseDescription = `Subscription to Journal Article for ${paypalDuration}`;

    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: purchaseDescription,
                amount: {
                  currency_code: 'CAD',
                  value: paypalPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          await setCookie('didUserPurchase', true, {
            path: '/',
            maxAge: 86400,
            sameSite: 'lax',
          });
          handleSignUpRedirect();
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return <div className={styles['paypal-container']} ref={paypal}></div>;
}

Paypal.propTypes = {
  duration: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Paypal;
