import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Documentation.css'; // Puoi riutilizzare il CSS

const Info = () => {
  const navigate = useNavigate();

  return (
    <div className="documentation">
      <h1>Informazioni</h1>
      <p>Qui puoi trovare le informazioni generali sulla tua applicazione.</p>
      {/* Altre informazioni qui */}

      <button onClick={() => navigate('/')}>Torna alla Home</button>
    </div>
  );
};

export default Info;
