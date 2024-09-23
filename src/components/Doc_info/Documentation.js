import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Documentation.css'; // Assicurati che questo file esista

const Documentation = () => {
  const navigate = useNavigate();

  return (
    <div className="documentation-container">
      <h1>Documentazione</h1>
      <p>Qui puoi trovare le informazioni sulla tua applicazione.</p>
      {/* Altre informazioni di documentazione qui */}

      <button onClick={() => navigate('/')}>Torna alla Home</button>
    </div>
  );
};

export default Documentation;
