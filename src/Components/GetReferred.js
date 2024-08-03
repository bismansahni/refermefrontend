
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { requestReferral } from '../services/api';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../styles/Register.css';
// import '../styles/Popup.css'; // Ensure you have this CSS file

// const GetReferred = () => {
//   const [formData, setFormData] = useState({
//     company_name: '',
//     job_url: ''
//   });

//   const location = useLocation();
//   const navigate = useNavigate();
//   const profileData = location.state?.profileData || {};

//   const [showPopup, setShowPopup] = useState(false);
//   const [showForm, setShowForm] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isEditable, setIsEditable] = useState(true); // Add state to control editable status
//   const [animation, setAnimation] = useState('');
//   const { company_name, job_url } = formData;

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     } else {
//       if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
//         toast.error(
//           // <div>
//           //   Please update your profile first.
//           //   <button
//           //     onClick={() => navigate('/update-profile', { state: { profileData } })}
//           //     style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
//           //   >
//           //     Update Profile
//           //   </button>
//           // </div>,
//           <div>
//   Please update your profile first.
//   <a
//     href="/update-profile"
//     onClick={(e) => {
//       e.preventDefault();
//       navigate('/update-profile', { state: { profileData } });
//     }}
//     style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer' ,textAlign: 'right' }}
//   >
//     Update Profile
//   </a>
// </div>,
//           { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
//         );
//         setIsEditable(false); // Make form ineditable
//       }
//     }
//   }, [navigate, profileData]);

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const validateJobUrl = (url) => {
//     const re = /^(ftp|http|https):\/\/[^ "]+$/;
//     return re.test(String(url).toLowerCase());
//   }

//   const onSubmit = async e => {
//     e.preventDefault();

//     if (!company_name || !job_url) {
//       toast.error("All fields are required");
//       setIsLoading(false);
//       return;
//     }

//     if (!validateJobUrl(job_url)) {
//       toast.error('Please enter a valid job URL');
//       setIsLoading(false);
//       return;
//     }

//     setIsLoading(true);
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const response = await requestReferral(token, formData);
//         console.log('Referral request successful:', response);

//         setShowPopup(true);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Referral request failed:', error);
//         toast.error('Referral request failed.');
//         setIsLoading(false);
//       }
//     } else {
//       toast.error('No token found. Please log in.');
//       setIsLoading(false);
//     }
//   };

//   const handleConfirmProfile = () => {
//     setShowPopup(false);
//     toast.success('Referral request successful!', { icon: false });

//     // Clear the content of the page after the toast notification
//     setTimeout(() => {
//       setFormData({
//         company_name: '',
//         job_url: ''
//       });
//     }, 5000); // Adjust the delay as needed
//   };

//   const handleUpdateProfile = () => {
//     navigate('/update-profile', { state: { profileData } });
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className={`main-register-container ${animation}`}>
//       <ToastContainer />
//       {showForm && (
//         <div className="register-box">
//           <div className="register-box-left"></div>
//           <div className={`register-box-right ${!isEditable ? 'ineditable' : ''}`}>
//             <div className="heading-box">
//               <h2>Request Referral</h2>
//             </div>
//             <div className="form-box">
//               <form onSubmit={onSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="company_name">Company Name</label>
//                   <input
//                     type="text"
//                     id="company_name"
//                     name="company_name"
//                     value={company_name}
//                     onChange={onChange}
//                     required
//                     disabled={!isEditable} // Disable input if form is not editable
//                     className={!isEditable ? 'ineditable' : ''} // Apply ineditable class if not editable
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="job_url">Job URL</label>
//                   <input
//                     type="text"
//                     id="job_url"
//                     name="job_url"
//                     value={job_url}
//                     onChange={onChange}
//                     required
//                     disabled={!isEditable} // Disable input if form is not editable
//                     className={!isEditable ? 'ineditable' : ''} // Apply ineditable class if not editable
//                   />
//                 </div>
//               </form>
//             </div>
//             <div className="button-box">
//               <button
//                 type="submit"
//                 onClick={onSubmit}
//                 disabled={!isEditable} // Disable button if form is not editable
//                 className={!isEditable ? 'ineditable' : ''} // Apply ineditable class if not editable
//               >
//                 Request Referral
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showPopup && profileData && (
//         <div className="popup-overlay">
//           <div className="popup-box">
//             <h3>Your Profile Data</h3>
//             <p><strong>Current Job Role:</strong> {profileData.current_job_role}</p>
//             <p><strong>Current Company:</strong> {profileData.current_company}</p>
//             <p><strong>Resume:</strong> {profileData.resume}</p>
//           </div>
//           <div className="popup-box-bottom">
//             <button onClick={handleConfirmProfile}>Confirm Profile Details</button>
//             <button onClick={handleUpdateProfile}>Update Profile</button>
//             <button onClick={handleClosePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetReferred;






import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { requestReferral } from '../services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Register.css';
import '../styles/Popup.css'; // Ensure you have this CSS file

const GetReferred = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    job_url: ''
  });

  const location = useLocation();
  const navigate = useNavigate();
  const profileData = location.state?.profileData || {};

  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditable, setIsEditable] = useState(true); // Add state to control editable status
  const [animation, setAnimation] = useState('');
  const [showOverlay, setShowOverlay] = useState(false); // Add state to control overlay visibility
  const { company_name, job_url } = formData;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
        toast.error(
          <div>
            Please update your profile first.
            <a
              href="/update-profile"
              onClick={(e) => {
                e.preventDefault();
                navigate('/update-profile', { state: { profileData } });
              }}
              style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
            >
              Update Profile
            </a>
          </div>,
          { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
        );
        setIsEditable(false); // Make form ineditable
        setShowOverlay(true); // Show overlay
        return;
      }
    }
  }, [navigate, profileData]);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateJobUrl = (url) => {
    const re = /^(ftp|http|https):\/\/[^ "]+$/;
    return re.test(String(url).toLowerCase());
  }

  const onSubmit = async e => {
    e.preventDefault();

    if (!company_name || !job_url) {
      toast.error("All fields are required");
      setIsLoading(false);
      return;
    }

    if (!validateJobUrl(job_url)) {
      toast.error('Please enter a valid job URL');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await requestReferral(token, formData);
        console.log('Referral request successful:', response);

        setShowPopup(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Referral request failed:', error);
        toast.error('Referral request failed.');
        setIsLoading(false);
      }
    } else {
      toast.error('No token found. Please log in.');
      setIsLoading(false);
    }
  };

  const handleConfirmProfile = () => {
    setShowPopup(false);
    toast.success('Referral request successful!', { icon: false });

    // Clear the content of the page after the toast notification
    setTimeout(() => {
      setFormData({
        company_name: '',
        job_url: ''
      });
    }, 5000); // Adjust the delay as needed
  };

  const handleUpdateProfile = () => {
    navigate('/update-profile', { state: { profileData } });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`main-register-container ${animation}`}>
      <ToastContainer style={{ zIndex: 10000 }} />
      {showOverlay && <div className="overlay"></div>}
      {showForm && (
        <div className="register-box">
          <div className="register-box-left"></div>
          <div className={`register-box-right ${!isEditable ? 'ineditable' : ''}`}>
            <div className="heading-box">
              <h2>Request Referral</h2>
            </div>
            <div className="form-box">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="company_name">Company Name</label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    value={company_name}
                    onChange={onChange}
                    required
                    disabled={!isEditable} // Disable input if form is not editable
                    className={!isEditable ? 'ineditable' : ''} // Apply ineditable class if not editable
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="job_url">Job URL</label>
                  <input
                    type="text"
                    id="job_url"
                    name="job_url"
                    value={job_url}
                    onChange={onChange}
                    required
                    disabled={!isEditable} // Disable input if form is not editable
                    className={!isEditable ? 'ineditable' : ''} // Apply ineditable class if not editable
                  />
                </div>
              </form>
            </div>
            <div className="button-box">
              <button
                type="submit"
                onClick={onSubmit}
                disabled={!isEditable} // Disable button if form is not editable
                className={!isEditable ? 'ineditable' : ''} // Apply ineditable class if not editable
              >
                Request Referral
              </button>
            </div>
          </div>
        </div>
      )}

      {showPopup && profileData && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Your Profile Data</h3>
            <p><strong>Current Job Role:</strong> {profileData.current_job_role}</p>
            <p><strong>Current Company:</strong> {profileData.current_company}</p>
            <p><strong>Resume:</strong> {profileData.resume}</p>
          </div>
          <div className="popup-box-bottom">
            <button onClick={handleConfirmProfile}>Confirm Profile Details</button>
            <button onClick={handleUpdateProfile}>Update Profile</button>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetReferred;
