


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';
import { useProfile } from '../Context/ProfileContext'; // Import the useProfile hook

const Dashboard = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [animation, setAnimation] = useState('');
  const { profileData, fetchProfileData } = useProfile(); // Destructure profileData and fetchProfileData from the context

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !profileData) {
      fetchProfileData(token); // Fetch profile data if not already fetched
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
    setAnimation('slide-left');
    setTimeout(() => navigate('/update-profile', { state: { profileData } }), 500); // Redirect after animation
  };

  const dropdownItems = [
    { name: 'Profile Settings', action: handleProfileSettings },
    { name: 'Logout', action: handleLogout },
  ];

  return (
    <div className={`dashboard-main-container ${animation}`}>
      <div className="dashboard-box">
        <div className="navbar"> 
          <div className="navbar-left"></div>
          <div className="navbar-right">
            <h2> <u>
              {/* Account Settings */}
              <span 
                className={`dropdown-arrow ${dropdownVisible ? 'rotate' : ''}`}
                onClick={toggleDropdown}
              >
                Account Settings ▼
              </span> </u>
            </h2>
            <div className={`dropdown ${dropdownVisible ? 'show-dropdown' : ''}`}>
              {dropdownItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="dropdown-button"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="middle-box">
        <div className="middle-box-left">
        <h1>Become a Referrer and Help Others Succeed!</h1>
        </div>
         <div className="middle-box-right">
         <h1>Get Referred to Your Dream Job!</h1>
         
          </div>
        </div>
        <div className="bottom-box">
          <div className="left-box">
            <button onClick={() => navigate('/be-a-referrer', { state: { profileData } })}>Be a Referrer</button>
          </div>
          <div className="right-box">
            <button onClick={() => navigate('/get-referred', { state: { profileData } })}>Get Referred</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
