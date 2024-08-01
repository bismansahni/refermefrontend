import React, { useState, useEffect } from 'react';
import { getNotifications } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
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

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <button onClick={() => navigate('/update-profile')}>Update Profile</button>
//       <button onClick={() => navigate('/request-referral')}>Request Referral</button>
//       <button onClick={handleLogout}>Logout</button>
//       <h2>Notifications</h2>
//       {notifications.length > 0 ? (
//         <ul>
//           {notifications.map((notification, index) => (
//             <li key={index}>{notification}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No notifications</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


return(
  <div className="dashboard-main-container">
  <div className="dashboard-box">
    <div className="navbar"> 
      <div className="navbar-left">
      </div> </div>
    <div className="middle-box"> </div>
    <div className='bottom-box'></div>

  </div>
  </div>
);
};
export default Dashboard;