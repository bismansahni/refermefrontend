import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getNotifications } from '../services/api.js';
import '../styles/BeReferrer.css'

const API_URL = process.env.REACT_APP_API_URL;



const BeReferrer = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);

  
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Notifications</h2>
//       {notifications.length === 0 ? (
//         <p>No notifications available</p>
//       ) : (
//         <ul>
//           {notifications.map((notification, index) => (
//             <li key={index}>{notification.message}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };


  return (
    <div className="main-container">
    <div className="main-notification-container">
        
    </div>
    </div>
  );
};

export default BeReferrer;
