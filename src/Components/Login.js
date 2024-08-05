


import React, { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useProfile } from '../Context/ProfileContext';
import styles from '../styles/Login.module.css'; 
import '../styles/Toastify.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [animation, setAnimation] = useState('');
  const { email, password } = formData;
  const navigate = useNavigate();
  const { fetchProfileData } = useProfile();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  const onSubmit = async e => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      const response = await login(email, password);
      console.log('Login successful:', response);
      localStorage.setItem('token', response.token);
      await fetchProfileData(response.token); 
      setAnimation(styles['slide-left']);
      setTimeout(() => navigate('/dashboard'), 500);
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please try again.');
      setIsLoading(false);
    }
  };
  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/register');
  };


  return (
    <div className={`${styles['main-register-container']} ${animation}`}>
      <ToastContainer className="toast-container" />
      <div className={styles['register-box']}>
        <div className={styles['register-box-left']}></div>
        <div className={styles['register-box-right']}>
          <div className={styles['heading-box']}>
            <h2>Sign In</h2>
          </div>
          <div className={styles['form-box']}>
            <form onSubmit={onSubmit}>
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
            <p>Don't have an account? <a href='/login' onClick={handleLoginClick}>Register Here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
