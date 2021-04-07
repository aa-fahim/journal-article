import React, { useState } from 'react';
import { Message } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import styles from './Dashboard.module.css';
import SubmitRequestInput from './components/SubmitRequestInput';
import { useAuth } from '../../contexts/AuthContext';

function Dashboard() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const history = useHistory();
  const { currentUser } = useAuth();

  const handleSignInRedirect = () => {
    history.push('/login');
  };

  // Disable Redirection
  // if (!currentUser) handleSignInRedirect();

  const handleDisplayMessage = (value) => {
    setShowSuccessMessage(false);
    setShowFailureMessage(false);

    if (value === 'success') setShowSuccessMessage(true);
    else if (value === 'error') setShowFailureMessage(true);
  };

  return (
    <div className={styles.dashboardContainer}>
      <SubmitRequestInput handleDisplayMessage={handleDisplayMessage} />
      {showSuccessMessage && (
        <Message
          success
          header="Your request was successful"
          content="Please check your email inbox in a few minutes"
          className={styles.messageDialog}
        />
      )}
      {showFailureMessage && (
        <Message
          error
          header="Your request was unsuccessful"
          content="Please try again shortly"
          className={styles.messageDialog}
        />
      )}
    </div>
  );
}

export default Dashboard;
