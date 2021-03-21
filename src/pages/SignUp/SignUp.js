import React, { useState } from 'react';
import './SignUp.css';
import { Input, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../contexts/AuthContext';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .max(50, 'Email cannot be longer than 50 characters')
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be atleast 8 characters')
    .max(30, 'Password cannot be longer than 30 characters')
    .required('Password is required'),
  confirm_password: Yup.string()
    .required('Confirmation of password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function SignUp() {
  const history = useHistory();
  const { signup, currentUser } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onLoginRedirect = () => {
    history.push('/login');
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
    validationSchema,
    validateOnChange: false,
    onSubmit(values) {
      onSubmitHandler(values.email, values.password);
    },
  });

  const onSubmitHandler = async (email, password) => {
    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      onLoginRedirect();
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  return (
    <div className="signup-page">
      <form className="signup-page-wrapper" onSubmit={handleSubmit}>
        <div className="signup-header">Sign Up</div>
        <Input
          id="email"
          icon="mail"
          iconPosition="left"
          placeholder="Email"
          className="signup-input"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email ? (
          <div className="signup-error">{errors.email}</div>
        ) : null}
        <Input
          id="password"
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          className="signup-input"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password ? (
          <div className="signup-error">{errors.password}</div>
        ) : null}
        <Input
          id="confirm_password"
          icon="lock"
          iconPosition="left"
          placeholder="Confirm Password"
          type="password"
          className="signup-input"
          onChange={handleChange}
        />
        {errors.confirm_password ? (
          <div className="signup-error">{errors.password}</div>
        ) : null}
        <Button
          type="submit"
          className="signup-button"
          color="blue"
          loading={loading}
          disabled={loading}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        {error ? <div className="signup-error">{error}</div> : null}
        {/*<div className="sign-up-text">
          Already have an account?&nbsp;
          <span className="underline-text" onClick={onLoginRedirect}>
            Log in here
          </span>
          &nbsp;now
        </div>*/}
      </form>
    </div>
  );
}

export default SignUp;
