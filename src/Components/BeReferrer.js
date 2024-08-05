



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getNotifications } from '../services/api.js';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../styles/BeReferrer.css';
// import { useProfile } from '../Context/ProfileContext'; // Import the useProfile hook

// const BeReferrer = () => {
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [notifications, setNotifications] = useState([]);
//   const [isEditable, setIsEditable] = useState(true); // Add state to control editable status
//   const navigate = useNavigate();
//   const { profileData, fetchProfileData } = useProfile(); // Destructure the profileData and fetchProfileData from the context

//   useEffect(() => {
    
//     const fetchNotifications = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Retrieve the token from localStorage
//         if (!token) {
//           throw new Error('No token found');
//         }

//         if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
//           toast.error(
//             <div>
//               Please update your profile first.
//               <a
//                 href="/update-profile"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate('/update-profile');
//                 }}
//                 style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
//               >
//                 Update Profile
//               </a>
//             </div>,
//             { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
//           );
//           setIsEditable(false); // Make form ineditable
//           return;
//         }

//         const response = await getNotifications(token);
//         setNotifications(response.notifications);
//       } catch (error) {
//         console.error('Error fetching notifications', error);
//       }
//     };

//     fetchNotifications();
//   }, [navigate, profileData]);

//   const handleDivClick = () => {
//     navigate('/dashboard');
//   };

//   return (
//     <div className="main-container">
//       <ToastContainer />
//       <div className={`main-notification-container ${!isEditable ? 'ineditable' : ''}`}>
//       <div className="main-register-container-image" onClick={handleDivClick}> </div>
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
//                 className={`request-preview ${!isEditable ? 'ineditable' : ''}`}
//                 onClick={() => isEditable && setSelectedRequest(notification)} // Disable click if not editable
//               >
//                 {notification.user.name}
//               </div>
//             ))}
//           </div>
//           <div className="middle-right">
//             {selectedRequest ? (
//               <div className="request-details">
//                 <div className="job-details">
//                   <h1>{selectedRequest.user.name}</h1>
//                   <p><strong>Current Job Role:</strong> {selectedRequest.user.current_job_role}</p>
//                   <p><strong>Current Company:</strong> {selectedRequest.user.current_company}</p>
//                   <p><strong>Target Job:</strong> {selectedRequest.target_job}</p>
//                   <p><strong>Target Company:</strong> {selectedRequest.target_company}</p>
//                   <p><strong>Resume:</strong> <a href={selectedRequest.user.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
//                   <p><strong>Job URL:</strong> <a href={selectedRequest.target_job} target="_blank" rel="noopener noreferrer">{selectedRequest.target_job}</a></p>
//                 </div>
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




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getNotifications } from '../services/api.js';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import styles from '../styles/BeReferrer.module.css'; // Import CSS Module
// import { useProfile } from '../Context/ProfileContext'; // Import the useProfile hook


// const BeReferrer = () => {
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [notifications, setNotifications] = useState([]);
//   const [isEditable, setIsEditable] = useState(true); // Add state to control editable status
//   const navigate = useNavigate();
//   const { profileData, fetchProfileData } = useProfile(); // Destructure the profileData and fetchProfileData from the context

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Retrieve the token from localStorage
//         if (!token) {
//           throw new Error('No token found');
//         }

//         if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
//           toast.error(
//             <div>
//               Please update your profile first.
//               <a
//                 href="/update-profile"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate('/update-profile');
//                 }}
//                 style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
//               >
//                 Update Profile
//               </a>
//             </div>,
//             { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
//           );
//           setIsEditable(false); // Make form ineditable
//           return;
//         }

//         const response = await getNotifications(token);
//         setNotifications(response.notifications);
//       } catch (error) {
//         console.error('Error fetching notifications', error);
//       }
//     };

//     fetchNotifications();
//   }, [navigate, profileData]);

//   const handleDivClick = () => {
//     navigate('/dashboard');
//   };

//   return (
//     <div className={styles.mainContainer}>
//       <ToastContainer />
//       <div className={`${styles.mainNotificationContainer} ${!isEditable ? styles.ineditable : ''}`}>
//         <div className={styles.mainRegisterContainerImage} onClick={handleDivClick}></div>
//         <div className={styles.navbarNotification}>
//           <div className={styles.navbarNotificationCenter}>
//             <h1>Referral Requests</h1>
//           </div>
//         </div>
//         <div className={styles.contentContainer}>
//           <div className={styles.middleLeft}>
//             {notifications.map((notification, index) => (
//               <div
//                 key={index}
//                 className={`${styles.requestPreview} ${!isEditable ? styles.ineditable : ''}`}
//                 onClick={() => isEditable && setSelectedRequest(notification)} // Disable click if not editable
//               >
//                 {notification.user.name}
//               </div>
//             ))}
//           </div>
//           <div className={styles.middleRight}>
//             {selectedRequest ? (
//               <div className={styles.requestDetails}>
//                 <div className={styles.jobDetails}>
//                   <h1>{selectedRequest.user.name}</h1>
//                   <p><strong>Current Job Role:</strong> {selectedRequest.user.current_job_role}</p>
//                   <p><strong>Current Company:</strong> {selectedRequest.user.current_company}</p>
//                   <p><strong>Target Job:</strong> {selectedRequest.target_job}</p>
//                   <p><strong>Target Company:</strong> {selectedRequest.target_company}</p>
//                   <p><strong>Resume:</strong> <a href={selectedRequest.user.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
//                   <p><strong>Job URL:</strong> <a href={selectedRequest.target_job} target="_blank" rel="noopener noreferrer">{selectedRequest.target_job}</a></p>
//                 </div>
//               </div>
//             ) : (
//               <div className={styles.noSelection}>Select a referral request to view details</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BeReferrer;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getNotifications } from '../services/api.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/BeReferrer.module.css'; // Import CSS Module
import { useProfile } from '../Context/ProfileContext'; // Import the useProfile hook

const BeReferrer = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [isEditable, setIsEditable] = useState(true); // Add state to control editable status
  const navigate = useNavigate();
  const { profileData, fetchProfileData } = useProfile(); // Destructure the profileData and fetchProfileData from the context

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
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
          setIsEditable(false); // Make form ineditable
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
                onClick={() => isEditable && setSelectedRequest(notification)} // Disable click if not editable
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
