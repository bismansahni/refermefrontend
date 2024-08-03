

// import React, { useState, useEffect } from 'react';
// import { updateProfile } from '../services/api';
// import '../styles/UpdateProfile.css';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../styles/Toastify.css';

// const UpdateProfile = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const profileData = location.state?.profileData || {};

//   const [formData, setFormData] = useState({
//     current_job_role: profileData.current_job_role || '',
//     current_company: profileData.current_company || '',
//     resume: profileData.resume || ''
//   });

//   const hasUpdatedProfile = profileData.current_job_role || profileData.current_company || profileData.resume;

//   const [isEditable, setIsEditable] = useState(!hasUpdatedProfile);

//   useEffect(() => {
//     if (!profileData) {
//       navigate('/dashboard');
//     }
//   }, [profileData, navigate]);

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const validateResumeLink = (resume) => {
//     const re = /^(ftp|http|https):\/\/[^ "]+$/;
//     return re.test(String(resume).toLowerCase());
//   }

//   const onSubmit = async e => {
//     e.preventDefault();

//     if (!formData.current_job_role || !formData.current_company || !formData.resume) {
//       toast.error("All fields are required");
//       return;
//     }

//     if (!validateResumeLink(formData.resume)) {
//       toast.error('Please enter a valid resume link');
//       return;
//     }

//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const response = await updateProfile(token, formData);
//         console.log('Profile update successful:', response);
//         toast.success('Profile updated successfully!', { icon: false });
//         setIsEditable(false);
//       } catch (error) {
//         console.error('Profile update failed:', error);
//         toast.error('Profile update failed.');
//       }
//     }
//   };

//   const onButtonClick = () => {
//     setIsEditable(true);
//   };

//   return (
//     <div className="main-register-container">
//       <ToastContainer />
//       <div className="register-box">
//         <div className="register-box-left"></div>
//         <div className="register-box-right">
//           <div className="heading-box">
//             <h2>My Profile</h2>
//           </div>
//           <div className="form-box">
//             <form onSubmit={onSubmit}>
//               <div className="form-group">
//                 <label htmlFor="current_job_role">Current Job Role</label>
//                 <input 
//                   type="text" 
//                   id="current_job_role" 
//                   name="current_job_role" 
//                   value={formData.current_job_role} 
//                   onChange={onChange} 
//                   required 
//                   disabled={!isEditable}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="current_company">Current Company</label>
//                 <input 
//                   type="text" 
//                   id="current_company" 
//                   name="current_company" 
//                   value={formData.current_company} 
//                   onChange={onChange} 
//                   required 
//                   disabled={!isEditable}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="resume">Resume Link</label>
//                 <input 
//                   type="text" 
//                   id="resume" 
//                   name="resume" 
//                   value={formData.resume} 
//                   onChange={onChange} 
//                   required 
//                   disabled={!isEditable}
//                 />
//               </div>
//             </form>
//           </div>
//           <div className="button-box">
//             <button type="submit" onClick={isEditable ? onSubmit : onButtonClick}>
//               {isEditable ? 'Update Profile' : 'Update Profile Again'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;




import React, { useState, useEffect } from 'react';
import { updateProfile } from '../services/api';
import '../styles/UpdateProfile.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Toastify.css';

const UpdateProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const profileData = location.state?.profileData || {};

  const [formData, setFormData] = useState({
    current_job_role: profileData.current_job_role || '',
    current_company: profileData.current_company || '',
    resume: profileData.resume || ''
  });

  const hasUpdatedProfile = profileData.current_job_role || profileData.current_company || profileData.resume;

  const [isEditable, setIsEditable] = useState(!hasUpdatedProfile);

  useEffect(() => {
    if (!profileData) {
      navigate('/dashboard');
    }
  }, [profileData, navigate]);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateResumeLink = (resume) => {
    const re = /^(ftp|http|https):\/\/[^ "]+$/;
    return re.test(String(resume).toLowerCase());
  }

  const onSubmit = async e => {
    e.preventDefault();

    if (!formData.current_job_role || !formData.current_company || !formData.resume) {
      toast.error("All fields are required");
      return;
    }

    if (!validateResumeLink(formData.resume)) {
      toast.error('Please enter a valid resume link');
      return;
    }

    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await updateProfile(token, formData);
        console.log('Profile update successful:', response);
        toast.success('Profile updated successfully!', { icon: false });
        setIsEditable(false);
      } catch (error) {
        console.error('Profile update failed:', error);
        toast.error('Profile update failed.');
      }
    }
  };

  const onButtonClick = () => {
    setIsEditable(true);
  };

  return (
    <div className="main-register-container">
      <ToastContainer />
      <div className="register-box">
        <div className="register-box-left"></div>
        <div className="register-box-right">
          <div className="heading-box">
            <h2>My Profile</h2>
          </div>
          <div className="form-box">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="current_job_role">Current Job Role</label>
                <input 
                  type="text" 
                  id="current_job_role" 
                  name="current_job_role" 
                  value={formData.current_job_role} 
                  onChange={onChange} 
                  required 
                  disabled={!isEditable}
                  className={!isEditable ? 'dimmed' : ''}
                />
              </div>
              <div className="form-group">
                <label htmlFor="current_company">Current Company</label>
                <input 
                  type="text" 
                  id="current_company" 
                  name="current_company" 
                  value={formData.current_company} 
                  onChange={onChange} 
                  required 
                  disabled={!isEditable}
                  className={!isEditable ? 'dimmed' : ''}
                />
              </div>
              <div className="form-group">
                <label htmlFor="resume">Resume Link</label>
                <input 
                  type="text" 
                  id="resume" 
                  name="resume" 
                  value={formData.resume} 
                  onChange={onChange} 
                  required 
                  disabled={!isEditable}
                  className={!isEditable ? 'dimmed' : ''}
                />
              </div>
            </form>
          </div>
          <div className="button-box">
            <button type="submit" onClick={isEditable ? onSubmit : onButtonClick}>
              {isEditable ? 'Update Profile' : 'Update Profile Again'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
