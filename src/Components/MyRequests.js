



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getReferrals } from '../services/api.js';
import styles from '../styles/MyRequests.module.css'; 
import { useProfile } from '../Context/ProfileContext'; 

const MyRequests = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [referrals, setReferrals] = useState([]);
  const navigate = useNavigate();
  const { profileData, fetchProfileData } = useProfile(); 

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const token = localStorage.getItem('token'); 
        if (!token) {
            navigate('/login');
          console.error('No token found');
          return;
        }
        console.log('Fetching referrals...');
        const fetchedReferrals = await getReferrals(token);
        console.log('Fetched referrals:', fetchedReferrals);
        setReferrals(Array.isArray(fetchedReferrals) ? fetchedReferrals : []);
      } catch (error) {
        console.error('Error getting referrals', error);
      }
    };

    fetchReferrals();
  }, []);

  const handleDivClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className={styles['main-container']}>
      <div className={styles['main-notification-container']}>
        <div className={styles['main-register-container-image']} onClick={handleDivClick}></div>
        <div className={styles['navbar-notification']}>
          <div className={styles['navbar-notification-center']}>
            <h1>My Requests</h1>
          </div>
        </div>
        <div className={styles['content-container']}>
          <div className={styles['middle-left']}>
            {referrals.map((referral, index) => (
              <div
                key={index}
                className={styles['request-preview']}
                onClick={() => setSelectedRequest(referral)} 
              >
                Your request to {referral.company_name}
              </div>
            ))}
          </div>
          <div className={styles['middle-right']}>
            {selectedRequest ? (
              <div className={styles['request-details']}>
                <div className={styles['job-details']}>
                  <h1>Your request to {selectedRequest.company_name}</h1>
                  <p><strong>Job URL:</strong> <a href={selectedRequest.job_url} target="_blank" rel="noopener noreferrer">{selectedRequest.job_url}</a></p>
                  <p><strong>Resume:</strong> <a href={selectedRequest.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
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

export default MyRequests;
