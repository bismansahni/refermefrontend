
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import UpdateProfile from './Components/UpdateProfile';
import BeReferrer from './Components/BeReferrer';
import MyRequests from './Components/MyRequests';
import Dashboard from './Components/Dashboard';
import GetReferred from './Components/GetReferred';
import { ProfileProvider } from './Context/ProfileContext';

const App = () => (
  <Router>
    <ProfileProvider>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/be-a-referrer" element={<BeReferrer />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/get-referred" element={<GetReferred />} />
          <Route path="/my-requests" element={<MyRequests />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </ProfileProvider>
  </Router>
);

export default App;
