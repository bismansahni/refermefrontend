


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Dashboard.module.css';
// import { useProfile } from '../Context/ProfileContext'; // Import the useProfile hook

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [animation, setAnimation] = useState('');
//   const { profileData, fetchProfileData } = useProfile(); // Destructure profileData and fetchProfileData from the context

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token && !profileData) {
//       fetchProfileData(token); // Fetch profile data if not already fetched
//     }
//   }, [profileData, fetchProfileData]);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   const handleProfileSettings = () => {
//     setAnimation('slide-left');
//     setTimeout(() => navigate('/update-profile', { state: { profileData } }), 500); // Redirect after animation
//   };

//   const dropdownItems = [
//     { name: 'Profile Settings', action: handleProfileSettings },
//     { name: 'Logout', action: handleLogout },
//   ];

//   return (
//     <div className={`dashboard-main-container ${animation}`}>
//       <div className="dashboard-box">
//         <div className="navbar"> 
//           <div className="navbar-left"></div>
//           <div className="navbar-right">
//             <h2> <u>
//               {/* Account Settings */}
//               <span 
//                 className={`dropdown-arrow ${dropdownVisible ? 'rotate' : ''}`}
//                 onClick={toggleDropdown}
//               >
//                 Account Settings ▼
//               </span> </u>
//             </h2>
//             <div className={`dropdown ${dropdownVisible ? 'show-dropdown' : ''}`}>
//               {dropdownItems.map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={item.action}
//                   className="dropdown-button"
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="middle-box">
//         <div className="middle-box-left">
//         <h1>Become a Referrer and Help Others Succeed!</h1>
//         </div>
//          <div className="middle-box-right">
//          <h1>Get Referred to Your Dream Job!</h1>
         
//           </div>
//         </div>
//         <div className="bottom-box">
//           <div className="left-box">
//             <button onClick={() => navigate('/be-a-referrer', { state: { profileData } })}>Be a Referrer</button>
//           </div>
//           <div className="right-box">
//             <button onClick={() => navigate('/get-referred', { state: { profileData } })}>Get Referred</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from '../styles/Dashboard.module.css'; // Import CSS Module
// import { useProfile } from '../Context/ProfileContext'; // Import the useProfile hook

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [animation, setAnimation] = useState('');
//   const { profileData, fetchProfileData } = useProfile(); // Destructure profileData and fetchProfileData from the context

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token && !profileData) {
//       fetchProfileData(token); // Fetch profile data if not already fetched
//     }
//   }, [profileData, fetchProfileData]);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   const handleProfileSettings = () => {
//     setAnimation(styles['slide-left']);
//     setTimeout(() => navigate('/update-profile', { state: { profileData } }), 500); // Redirect after animation
//   };

//   const dropdownItems = [
//     { name: 'Profile Settings', action: handleProfileSettings },
//     { name: 'Logout', action: handleLogout },
//   ];

//   return (
    
//     <div className={`${styles.dashboardMainContainer} ${animation}`}>
//       <div className={styles.dashboardBox}>
//         <div className={styles.navbar}>
//           <div className={styles.navbarLeft}></div>
//           <div className={styles.navbarRight}>
//             <h2><u>
//               <span 
//                 className={`${styles.dropdownArrow} ${dropdownVisible ? styles.rotate : ''}`}
//                 onClick={toggleDropdown}
//               >
//                 Account Settings ▼
//               </span></u>
//             </h2>
//             <div className={`${styles.dropdown} ${dropdownVisible ? styles.showDropdown : ''}`}>
//               {dropdownItems.map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={item.action}
//                   className={styles.dropdownButton}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className={styles.middleBox}>
//           <div className={styles.middleBoxLeft}>
//             <h1>Become a Referrer and Help Others Succeed!</h1>
//           </div>
//           <div className={styles.middleBoxRight}>
//             <h1>Get Referred to Your Dream Job!</h1>
//           </div>
//         </div>
//         <div className={styles.bottomBox}>
//           <div className={styles.leftBox}>
//             <button onClick={() => navigate('/be-a-referrer', { state: { profileData } })}>Be a Referrer</button>
//           </div>
//           <div className={styles.rightBox}>
//             <button onClick={() => navigate('/get-referred', { state: { profileData } })}>Get Referred</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Dashboard.module.css'; // Ensure correct import path and naming
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
    setAnimation(styles['slide-left']);
    setTimeout(() => navigate('/update-profile', { state: { profileData } }), 500); // Redirect after animation
  };

  const dropdownItems = [
    { name: 'Profile Settings', action: handleProfileSettings },
    { name: 'Logout', action: handleLogout },
  ];

  console.log(styles); // Add this line to check if styles object is correctly imported

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
