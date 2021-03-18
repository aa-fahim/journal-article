import React from 'react';
import styles from './Dashboard.module.css';
import SubmitRequestInput from './components/SubmitRequestInput';

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <SubmitRequestInput />
    </div>
  );
}

export default Dashboard;
