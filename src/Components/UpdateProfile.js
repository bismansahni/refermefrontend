

import React, { useState, useEffect } from 'react';
import { updateProfile } from '../services/api';
import '../styles/UpdateProfile.css';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    current_job_role: '',
    current_company: '',
    resume: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await updateProfile(token, formData);
        console.log('Profile update successful:', response);
        navigate('/dashboard');
      } catch (error) {
        console.error('Profile update failed:', error);
      }
    }
  };

  return (
    <div className="main-register-container">
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
                />
              </div>
            </form>
          </div>
          <div className="button-box">
            <button type="submit" onClick={onSubmit}>Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
