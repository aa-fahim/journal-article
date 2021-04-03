import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Button } from 'semantic-ui-react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './PasswordReset.module.css';

function PasswordReset() {
  const history = useHistory();
  const { resetPassword } = useAuth();

  const [error, setError] = useState(null);
  const [email, setEmail] = useState();

  const onLoginRedirect = () => {
    history.push('/login');
  };

  const onSubmitHandler = async () => {
    console.log(email);
    try {
      setError('');
      await resetPassword(email);
      onLoginRedirect();
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
    </div>
  );
}

export default PasswordReset;
