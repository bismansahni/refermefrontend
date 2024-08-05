


// import React, { useState } from 'react';
// import { register } from '../services/api';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import '../styles/Register.css';
// import 'react-toastify/dist/ReactToastify.css';
// import { useProfile } from '../Context/ProfileContext'; // Import the useProfile hook

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [animation, setAnimation] = useState('');
//   const { name, email, password } = formData;
//   const navigate = useNavigate(); 
//   const { fetchProfileData } = useProfile(); // Destructure fetchProfileData from the context

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   }

//   const onSubmit = async e => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       toast.error("All fields are required");
//       return;
//     }

//     if (!validateEmail(email)) {
//       toast.error('Please enter a valid email address');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await register(name, email, password);
//       console.log('Registration successful:', response);
//       localStorage.setItem('token', response.token);
//       await fetchProfileData(response.token); // Fetch profile data after registration
//       setAnimation('slide-left');
//       setTimeout(() => navigate('/dashboard'), 500);
//     } catch (error) {
//       console.error('Registration failed:', error);
//       if (error.response && error.response.status === 409) { // Checking for 409 Conflict status code
//         toast.error('A User with this email already exists');
//       } else {
//         toast.error('Registration failed. Please try again.');
//       }
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className={`main-register-container ${animation}`}>
//       <ToastContainer />
//       <div className="register-box">
//         <div className="register-box-left"></div>
//         <div className="register-box-right">
//           <div className="heading-box">
//             <h2>Register Now!</h2>
//           </div>
//           <div className="form-box">
//             <form onSubmit={onSubmit}>
//               <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input type="text" id="name" name="name" value={name} onChange={onChange} />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email Address</label>
//                 <input type="email" id="email" name="email" value={email} onChange={onChange} />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input type="password" id="password" name="password" value={password} onChange={onChange} />
//               </div>
//             </form>
//           </div>
//           <div className="button-box">
//             <button type="submit" onClick={onSubmit}>Continue</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;





import React, { useState } from 'react';
import { register } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import styles from '../styles/Register.module.css'; // Import CSS Module
import 'react-toastify/dist/ReactToastify.css';
import { useProfile } from '../Context/ProfileContext';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [animation, setAnimation] = useState('');
  const { name, email, password } = formData;
  const navigate = useNavigate();
  const { fetchProfileData } = useProfile();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  const onSubmit = async e => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      const response = await register(name, email, password);
      console.log('Registration successful:', response);
      localStorage.setItem('token', response.token);
      await fetchProfileData(response.token);
      setAnimation(styles['slide-left']); // Use CSS Module class
      setTimeout(() => navigate('/dashboard'), 500);
    } catch (error) {
      console.error('Registration failed:', error);
      if (error.response && error.response.status === 409) {
        toast.error('A User with this email already exists');
      } else {
        toast.error('Registration failed. Please try again.');
      }
      setIsLoading(false);
    }
  };

  return (
    <div className={`${styles['main-register-container']} ${animation}`}>
      <ToastContainer />
      <div className={styles['register-box']}>
        <div className={styles['register-box-left']}></div>
        <div className={styles['register-box-right']}>
          <div className={styles['heading-box']}>
            <h2>Register Now!</h2>
          </div>
          <div className={styles['form-box']}>
            <form onSubmit={onSubmit}>
              <div className={styles['form-group']}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={onChange} />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={email} onChange={onChange} />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={onChange} />
              </div>
            </form>
          </div>
          <div className={styles['button-box']}>
            <button type="submit" onClick={onSubmit}>Continue</button>
            {/* <p>Already have an account? Login Here</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
