import React from 'react';
import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
   <Router>
    <nav>
      <ul>
      <li><Link to='/user/mick'>Mick</Link></li>
      <li><Link to='/user/alice'>Alice</Link></li>
      <li><Link to='/user/steve'>Steve</Link></li>
      </ul>
    </nav>
    <Routes>
    <Route path='/user/:username' element={<UserProfile />} />
    </Routes>
      
      
      </Router>

    );
}

export default App;
