

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Dashboard.module.css'; 
import { useProfile } from '../Context/ProfileContext'; 


const Dashboard = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [animation, setAnimation] = useState('');
  const { profileData, fetchProfileData } = useProfile(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !profileData) {
      fetchProfileData(token); 
    }
  }, [profileData, fetchProfileData]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleProfileSettings = () => {
    setAnimation(styles['slide-left']);
    setTimeout(() => navigate('/update-profile', { state: { profileData } }), 500); 
  };

  const dropdownItems = [
    { name: 'Profile Settings', action: handleProfileSettings },
    { name: 'Logout', action: handleLogout },
  ];

  console.log(styles); 

  return (
    <div className={`${styles['dashboard-main-container']} ${animation}`}>
      <div className={styles['dashboard-box']}>
        <div className={styles.navbar}>
          <div className={styles['navbar-left']}></div>
          <div className={styles['navbar-right']}>
            <h2>
              <u>
                <span
                  className={`${styles.dropdownArrow} ${dropdownVisible ? styles.rotate : ''}`}
                  onClick={toggleDropdown}
                >
                  Account Settings ▼
                </span>
              </u>
            </h2>
            <div className={`${styles.dropdown} ${dropdownVisible ? styles['show-dropdown'] : ''}`}>
              {dropdownItems.map((item, index) => (
                <button key={index} onClick={item.action} className={styles['dropdown-button']}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className={styles['middle-box']}>
          <div className={styles['middle-box-left']}>
            <h1>Become a Referrer and Help Others Succeed!</h1>
          </div>
          <div className={styles['middle-box-right']}>
            <h1>Get Referred to Your Dream Job!</h1>
          </div>
        </div>
        <div className={styles['bottom-box']}>
          <div className={styles['left-box']}>
            <button onClick={() => navigate('/be-a-referrer', { state: { profileData } })}>Be a Referrer</button>
          </div>
          <div className={styles['right-box']}>
            <button onClick={() => navigate('/get-referred', { state: { profileData } })}>Get Referred</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
