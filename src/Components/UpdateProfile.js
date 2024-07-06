import React, { useState, useEffect } from 'react';
import { updateProfile } from '../services/api';
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
    <form onSubmit={onSubmit}>
      <div>
        <label>Current Job Role</label>
        <input type="text" name="current_job_role" value={formData.current_job_role} onChange={onChange} required />
      </div>
      <div>
        <label>Current Company</label>
        <input type="text" name="current_company" value={formData.current_company} onChange={onChange} required />
      </div>
      <div>
        <label>Resume</label>
        <input type="text" name="resume" value={formData.resume} onChange={onChange} required />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UpdateProfile;
