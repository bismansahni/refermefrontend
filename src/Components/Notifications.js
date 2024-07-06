import React, { useState, useEffect } from 'react';
import { getNotifications } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotifications = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await getNotifications(token);
          setNotifications(response.notifications);
        } catch (error) {
          console.error('Failed to fetch notifications:', error);
        }
      } else {
        navigate('/login');
      }
    };

    fetchNotifications();
  }, [navigate]);

  return (
    <div>
      <h1>Notifications</h1>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
};

export default Notifications;
