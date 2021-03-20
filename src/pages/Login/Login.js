import React, { useState } from 'react';
import './Login.css';
import { Input, Checkbox, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAuth } from '../../contexts/AuthContext';

function Login() {
  const history = useHistory();
  const { login } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubscribeRedirect = () => {
    history.push('/subscribe');
  };

  const handleDashboardRedirect = () => {
    history.push('/main');
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit(values) {
      onSubmitHandler(values.email, values.password);
    },
  });

  const onSubmitHandler = async (email, password) => {
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      handleDashboardRedirect();
    } catch {
      setError('Failed to sign into account');
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-page-wrapper">
        <div className="login-header">Login</div>
        <Input
          id="email"
          icon="mail"
          iconPosition="left"
          placeholder="Email"
          className="login-input"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          id="password"
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          className="login-input"
          value={values.password}
          onChange={handleChange}
        />
        <Checkbox label="Remember me" />
        <Button
          type="submit"
          className="login-button"
          color="blue"
          loading={loading}
          disabled={loading}
          onClick={handleSubmit}
        >
          Login
        </Button>
        {error ? <div className="login-error">{error}</div> : null}
        <div className="sign-up-text">
          Not a member?&nbsp;
          <span className="underline-text" onClick={onSubscribeRedirect}>
            Subscribe
          </span>
          &nbsp;today
        </div>
      </div>
    </div>
  );
}

export default Login;
