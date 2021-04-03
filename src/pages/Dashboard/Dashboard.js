import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Dashboard.module.css';
import SubmitRequestInput from './components/SubmitRequestInput';
import { useAuth } from '../../contexts/AuthContext';

function Dashboard() {
  const history = useHistory();
  const { currentUser } = useAuth();

  const handleSignInRedirect = () => {
    history.push('/login');
  };

  // if (!currentUser) handleSignInRedirect();

  return (
    <div className={styles.dashboardContainer}>
      <SubmitRequestInput />
    </div>
  );
}

export default Dashboard;
