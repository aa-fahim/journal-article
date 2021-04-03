/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import styles from './MenuSidebar.module.css';
import { useAuth } from '../../contexts/AuthContext';

function MenuSidebar(props) {
  const [visible, setVisible] = useState(true);
  const history = useHistory();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      handleSignInRedirect();
    } catch {
      console.log('failed to logout');
      // we can put a notifcation here
    }
  };

  const handleSignInRedirect = () => {
    history.push('/login');
  };

  return (
    <div className={styles['menu-sidebar-container']}>
      <Sidebar
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
        height="100%"
      >
        <div className={styles['menu-wrapper']}>
          <Menu.Item as="a" onClick={handleLogout}>
            <Icon name="log out" />
            Logout
          </Menu.Item>
        </div>
      </Sidebar>
    </div>
  );
}

export default MenuSidebar;
