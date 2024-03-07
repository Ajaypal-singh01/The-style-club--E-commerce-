import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Men from './Men/Men';
import Women from './women/women';
import Kid from './kid/kid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
      
        <Routes>
          <Route path="/" element={<Men/>} />
          <Route path="/Women" element={<Women/>} />
          <Route path="/Kid" element={<Kid/>} />
        </Routes>
    
    </Router>
      </div>
  );
}

export default App;
