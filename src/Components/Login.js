import React, { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [animation, setAnimation] = useState(''); 
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await login(email, password);
      console.log('Login successful:', response);
      localStorage.setItem('token', response.token);
      setAnimation('slide-left'); 
      setTimeout(() => navigate('/dashboard'), 500); 
    } catch (error) {
      console.error('Login failed:', error);
      setIsLoading(false); 
    }
  };

//   return (
//     <form onSubmit={onSubmit}>
//       <div>
//         <label>Email</label>
//         <input type="email" name="email" value={email} onChange={onChange} required />
//       </div>
//       <div>
//         <label>Password</label>
//         <input type="password" name="password" value={password} onChange={onChange} required />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;





return (
  <div className={`main-register-container ${animation}`}>
    <div className="register-box">
      <div className="register-box-left"></div>
        <div className="register-box-right">
          <div className="heading-box">
            <h2>Sign In</h2>
          </div>
          <div className="form-box">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={email} onChange={onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={onChange} />
              </div>
              {/* <button type="submit">Register</button> */}
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

export default Login;



