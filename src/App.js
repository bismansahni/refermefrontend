import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import UpdateProfile from './Components/UpdateProfile';
import RequestReferral from './Components/RequestReferral';
import Notifications from './Components/Notifications';
import Dashboard from './Components/Dashboard';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/request-referral" element={<RequestReferral />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notifications" element={<Notifications />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  </Router>
);

export default App;
