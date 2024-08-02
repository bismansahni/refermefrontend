

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getNotifications } from '../services/api.js';
// import '../styles/BeReferrer.css';

// const BeReferrer = () => {
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Retrieve the token from localStorage
//         if (!token) {
//           throw new Error('No token found');
//         }
//         const response = await getNotifications(token);
//         setNotifications(response.notifications);
//       } catch (error) {
//         console.error('Error fetching notifications', error);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   return (
//     <div className="main-container">
//       <div className="main-notification-container">
//         <div className="navbar-notification">
//           <div className="navbar-notification-center">
//             <h1>Referral Requests</h1>
//           </div>
//         </div>
//         <div className="content-container">
//           <div className="middle-left">
//             {notifications.map((notification, index) => (
//               <div
//                 key={index}
//                 className="request-preview"
//                 onClick={() => setSelectedRequest(notification)}
//               >
//                 {notification.user.name}
//               </div>
//             ))}
//           </div>
//           <div className="middle-right">
//             {selectedRequest ? (
//               <div className="request-details">
//                 <h2>{selectedRequest.user.name}</h2>
//                 <p>Current Job Role: {selectedRequest.user.current_job_role}</p>
//                 <p>Current Company: {selectedRequest.user.current_company}</p>
//                 <p>Target Job: {selectedRequest.target_job}</p>
//                 <p>Target Company: {selectedRequest.target_company}</p>
//                 <p>Resume: <a href={selectedRequest.user.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
//                 <p>Job URL: <a href={selectedRequest.target_job} target="_blank" rel="noopener noreferrer">{selectedRequest.target_job}</a></p>
//               </div>
//             ) : (
//               <div className="no-selection">Select a referral request to view details</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BeReferrer;



import React, { useState, useEffect } from 'react';
import { getNotifications } from '../services/api.js';
import '../styles/BeReferrer.css';

const BeReferrer = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        if (!token) {
          throw new Error('No token found');
        }
        const response = await getNotifications(token);
        setNotifications(response.notifications);
      } catch (error) {
        console.error('Error fetching notifications', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="main-container">
      <div className="main-notification-container">
        <div className="navbar-notification">
          <div className="navbar-notification-center">
            <h1>Referral Requests</h1>
          </div>
        </div>
        <div className="content-container">
          <div className="middle-left">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="request-preview"
                onClick={() => setSelectedRequest(notification)}
              >
                {notification.user.name}
              </div>
            ))}
          </div>
          <div className="middle-right">
            {selectedRequest ? (
              <div className="request-details">
                <h2>{selectedRequest.user.name}</h2>
                <div className="job-details">
                  <p><strong>Current Job Role:</strong> {selectedRequest.user.current_job_role}</p>
                  <p><strong>Current Company:</strong> {selectedRequest.user.current_company}</p>
                  <p><strong>Target Job:</strong> {selectedRequest.target_job}</p>
                  <p><strong>Target Company:</strong> {selectedRequest.target_company}</p>
                  <p><strong>Resume:</strong> <a href={selectedRequest.user.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
                  <p><strong>Job URL:</strong> <a href={selectedRequest.target_job} target="_blank" rel="noopener noreferrer">{selectedRequest.target_job}</a></p>
                </div>
              </div>
            ) : (
              <div className="no-selection">Select a referral request to view details</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeReferrer;
