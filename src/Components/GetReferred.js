import React, { useState, useEffect } from 'react';
import { requestReferral } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Register.css';

const GetReferred = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    job_url: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [animation, setAnimation] = useState('');
  const { company_name, job_url } = formData;
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
    setIsLoading(true);
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await requestReferral(token, formData);
        console.log('Referral request successful:', response);
        toast.success('Referral request successful!', { icon: false });
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

  return (
    <div className={`main-register-container ${animation}`}>
      <ToastContainer />
      <div className="register-box">
        <div className="register-box-left"></div>
        <div className="register-box-right">
          <div className="heading-box">
            <h2>Request Referral</h2>
          </div>
          <div className="form-box">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="company_name">Company Name</label>
                <input type="text" id="company_name" name="company_name" value={company_name} onChange={onChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="job_url">Job URL</label>
                <input type="text" id="job_url" name="job_url" value={job_url} onChange={onChange} required />
              </div>
            </form>
          </div>
          <div className="button-box">
            <button type="submit" onClick={onSubmit}>Request Referral</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetReferred;
