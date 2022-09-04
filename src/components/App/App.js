import './App.css';

import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import React, { useState, useEffect } from "react";

import Preloader from "../Preloader/Preloader";

import Home from '../Home/Home';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div id="app">

      { loading ? 
      
        <Preloader id="gear_animation"/>
        
        :
        
        <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route exact path='/home' element={<Home />} />
          </Routes>
        </Router>

      }

    </div>
  );
}

export default App;