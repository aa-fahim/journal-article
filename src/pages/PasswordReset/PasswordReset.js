import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Button, Message } from 'semantic-ui-react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './PasswordReset.module.css';

function PasswordReset() {
  const history = useHistory();
  const { resetPassword } = useAuth();

  const [error, setError] = useState(null);
  const [email, setEmail] = useState();
  const [showMessage, setShowMessage] = useState(false);

  const onLoginRedirect = () => {
    history.push('/login');
  };

  const onSubmitHandler = async () => {
    setShowMessage(false);
    try {
      setError('');
      await resetPassword(email);
      setShowMessage(true);
    } catch {
      setError('No account registered with this email');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className={styles['password-reset-page']}>
      <div className={styles['password-reset-page-wrapper']}>
        <div className={styles['password-reset-header']}>Reset Password</div>
        <Input
          id="email"
          icon="mail"
          iconPosition="left"
          placeholder="Email"
          className={styles['password-reset-input']}
          value={email}
          onChange={handleEmailChange}
        />
        <Button
          type="submit"
          className={styles['password-reset-button']}
          color="blue"
          onClick={onSubmitHandler}
        >
          Reset
        </Button>
        {error ? (
          <div className={styles['password-reset-error']}>{error}</div>
        ) : null}
      </div>
      {showMessage && (
        <Message
          error
          floating
          header="Instructions to reset your password have been sent to your email"
          content={
            <div>
              Click{' '}
              <span className="underline-text" onClick={onLoginRedirect}>
                here
              </span>{' '}
              to login with your new password
            </div>
          }
          className={styles.messageDialog}
        />
      )}
    </div>
  );
}

export default PasswordReset;
