import React, { useState } from 'react';
import { register } from '../services/api';
import '../styles/Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await register(name, email, password);
      console.log('Registration successful:', response);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

//   return (
//     <form onSubmit={onSubmit}>
//       <div>
//         <label>Name</label>
//         <input type="text" name="name" value={name} onChange={onChange} required />
//       </div>
//       <div>
//         <label>Email</label>
//         <input type="email" name="email" value={email} onChange={onChange} required />
//       </div>
//       <div>
//         <label>Password</label>
//         <input type="password" name="password" value={password} onChange={onChange} required />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;


return (
  <div className="main-register-container">
    <div className="register-box">
      <div className="register-box-left"></div>
        <div className="register-box-right">
          <div className="heading-box">
          <h2>Register Now!</h2>
          </div>
          <div className="form-box">
          <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" />
              </div>
              {/* <button type="submit">Register</button> */}
            </form>
         
          </div>
          <div className="button-box">
            <button> Continue</button>
          </div>
   
     

      </div>
    </div>
  </div>
)
};
export default Register;