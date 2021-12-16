import React from 'react';
import { BrowserRouter, Route,Navigate,Routes } from 'react-router-dom';

import Challenges from './challenges/Challenges';
import Navbar from "./components/Navbar";
import Results from './results/Results';
import SpeedCheck from './speedCheck/SpeedCheck';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/results" element={<Results/>} />
          <Route exact path="/challanges" element={<Challenges/>} />
          <Route exact path="/" element={<SpeedCheck/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
