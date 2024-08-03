// import React, { useState } from 'react';
// import { register } from '../services/api';
// import '../styles/Register.css'
// import { useNavigate } from 'react-router-dom';

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

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
//     try {
//       const response = await register(name, email, password);
//       console.log('Registration successful:', response);
//       localStorage.setItem('token', response.token);
//       setAnimation('slide-left'); // Apply the slide left animation class
//       setTimeout(() => navigate('/dashboard'), 500);
     
//     } catch (error) {
//       console.error('Registration failed:', error);
//       setIsLoading(false);
//     }
//   };

// //   return (
// //     <form onSubmit={onSubmit}>
// //       <div>
// //         <label>Name</label>
// //         <input type="text" name="name" value={name} onChange={onChange} required />
// //       </div>
// //       <div>
// //         <label>Email</label>
// //         <input type="email" name="email" value={email} onChange={onChange} required />
// //       </div>
// //       <div>
// //         <label>Password</label>
// //         <input type="password" name="password" value={password} onChange={onChange} required />
// //       </div>
// //       <button type="submit">Register</button>
// //     </form>
// //   );
// // };

// // export default Register;


// // return (
// //   <div className="main-register-container">
// //     <div className="register-box">
// //       <div className="register-box-left"></div>
// //         <div className="register-box-right">
// //           <div className="heading-box">
// //           <h2>Register Now!</h2>
// //           </div>
// //           <div className="form-box">
// //           <form>
// //               <div className="form-group">
// //                 <label htmlFor="name">Name</label>
// //                 <input type="text" id="name" name="name" />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="email">Email Address</label>
// //                 <input type="email" id="email" name="email"  />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="password">Password</label>
// //                 <input type="password" id="password" name="password"  />
// //               </div>
// //               {/* <button type="submit">Register</button> */}
// //             </form>
         
// //           </div>
// //           <div className="button-box">
// //             <button> Continue</button>
// //           </div>
   
     

// //       </div>
// //     </div>
// //   </div>
// // )
// // };
// // export default Register;



// return (
//   <div className={`main-register-container ${animation}`}>
//     <div className="register-box">
//       <div className="register-box-left"></div>
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
//               {/* <button type="submit">Register</button> */}
//             </form>
//           </div>
//           <div className="button-box">
//             <button type="submit" onClick={onSubmit}>Continue</button>
//           </div>
//       </div>
//     </div>
//   </div>
// );
// };

// export default Register;



import React, { useState } from 'react';
import { register } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/Register.css';
import 'react-toastify/dist/ReactToastify.css';

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
      setAnimation('slide-left');
      setTimeout(() => navigate('/dashboard'), 500);
    } catch (error) {
      console.error('Registration failed:', error);
      if (error.response && error.response.status === 409) { // Checking for 409 Conflict status code
        toast.error('A User with this email already exists');
      } else {
        toast.error('Registration failed. Please try again.');
      }
      setIsLoading(false);
    }
  };

  return (
    <div className={`main-register-container ${animation}`}>
      <ToastContainer />
      <div className="register-box">
        <div className="register-box-left"></div>
        <div className="register-box-right">
          <div className="heading-box">
            <h2>Register Now!</h2>
          </div>
          <div className="form-box">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={email} onChange={onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={onChange} />
              </div>
            </form>
          </div>
          <div className="button-box">
            <button type="submit" onClick={onSubmit}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
