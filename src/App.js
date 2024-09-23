// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Documentation from './components/Doc_info/Documentation';
import Info from './components/Doc_info/Info'; // Importa il componente Info

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/info" element={<Info />} /> {/* Aggiungi questa riga */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
