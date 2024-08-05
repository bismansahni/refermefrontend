

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getNotifications } from '../services/api.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/BeReferrer.module.css'; 
import { useProfile } from '../Context/ProfileContext'; 

const BeReferrer = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [isEditable, setIsEditable] = useState(true); 
  const navigate = useNavigate();
  const { profileData, fetchProfileData } = useProfile(); 

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem('token'); 
        if (!token) {
          throw new Error('No token found');
        }

        if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
          toast.error(
            <div>
              Please update your profile first.
              <a
                href="/update-profile"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/update-profile');
                }}
                style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
              >
                Update Profile
              </a>
            </div>,
            { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
          );
          setIsEditable(false); 
          return;
        }

        const response = await getNotifications(token);
        setNotifications(response.notifications);
      } catch (error) {
        console.error('Error fetching notifications', error);
      }
    };

    fetchNotifications();
  }, [navigate, profileData]);

  const handleDivClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className={styles['main-container']}>
      <ToastContainer />
      <div className={`${styles['main-notification-container']} ${!isEditable ? styles['ineditable'] : ''}`}>
        <div className={styles['main-register-container-image']} onClick={handleDivClick}></div>
        <div className={styles['navbar-notification']}>
          <div className={styles['navbar-notification-center']}>
            <h1>Referral Requests</h1>
          </div>
        </div>
        <div className={styles['content-container']}>
          <div className={styles['middle-left']}>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className={`${styles['request-preview']} ${!isEditable ? styles['ineditable'] : ''}`}
                onClick={() => isEditable && setSelectedRequest(notification)} 
              >
                {notification.user.name}
              </div>
            ))}
          </div>
          <div className={styles['middle-right']}>
            {selectedRequest ? (
              <div className={styles['request-details']}>
                <div className={styles['job-details']}>
                  <h1>{selectedRequest.user.name}</h1>
                  <p><strong>Current Job Role:</strong> {selectedRequest.user.current_job_role}</p>
                  <p><strong>Current Company:</strong> {selectedRequest.user.current_company}</p>
                  <p><strong>Target Job:</strong> {selectedRequest.target_job}</p>
                  <p><strong>Target Company:</strong> {selectedRequest.target_company}</p>
                  <p><strong>Resume:</strong> <a href={selectedRequest.user.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
                  <p><strong>Job URL:</strong> <a href={selectedRequest.target_job} target="_blank" rel="noopener noreferrer">{selectedRequest.target_job}</a></p>
                </div>
              </div>
            ) : (
              <div className={styles['no-selection']}>Select a referral request to view details</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeReferrer;
