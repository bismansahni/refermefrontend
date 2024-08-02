import React, { useState, useEffect } from 'react';
import { requestReferral } from '../services/api';
import { useNavigate } from 'react-router-dom';

const RequestReferral = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    job_url: ''
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
        const response = await requestReferral(token, formData);
        console.log('Referral request successful:', response);
        // Redirect to dashboard or show a success message
        navigate('/dashboard');
      } catch (error) {
        console.error('Referral request failed:', error);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Company Name</label>
        <input type="text" name="company_name" value={formData.company_name} onChange={onChange} required />
      </div>
      <div>
        <label>Job URL</label>
        <input type="text" name="job_url" value={formData.job_url} onChange={onChange} required />
      </div>
      <button type="submit">Request Referral</button>
    </form>
  );
};

export default RequestReferral;


