import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import UpdateProfile from './Components/UpdateProfile';
import BeReferrer from './Components/BeReferrer';

import Dashboard from './Components/Dashboard';
import GetReferred from './Components/GetReferred';

const App = () => (
  <Router>
    <div>
      <Routes>
      <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/be-a-referrer" element={<BeReferrer />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/get-referred" element={<GetReferred />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  </Router>
);

export default App;
