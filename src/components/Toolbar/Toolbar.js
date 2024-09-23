import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';
import { FaQuestionCircle } from 'react-icons/fa';

const Toolbar = ({ onNewSchema, onSave, onLoad, onExport, onAddEntity, onAddRelation, onAddGeneralization }) => {
  const [isFileMenuOpen, setFileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleFileMenu = () => {
    setFileMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setFileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="toolbar">
      <div className="dropdown" ref={dropdownRef}>
        <button className="dropbtn" onClick={toggleFileMenu}>File</button>
        {isFileMenuOpen && (
          <div className="dropdown-content">
            <button onClick={onNewSchema}>Nuovo Schema</button>
            <button onClick={onLoad}>Carica</button>
            <button onClick={onSave}>Salva</button>
            <button onClick={onExport}>Esporta</button>
          </div>
        )}
      </div>
      <button className="toolbar-button" onClick={onAddEntity}>Aggiungi Entità</button>
      <button className="toolbar-button" onClick={onAddRelation}>Aggiungi Relazione</button>
      <button className="toolbar-button" onClick={onAddGeneralization}>Aggiungi Generalizzazione</button>
      <Link to="/documentation" className="toolbar-button">
        <FaQuestionCircle /> Aiuto
      </Link>
    </div>
  );
};

export default Toolbar;
