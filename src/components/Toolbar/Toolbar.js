import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Toolbar.css';
import { FaQuestionCircle, FaFileAlt, FaInfoCircle } from 'react-icons/fa';

const Toolbar = ({ onNewSchema, onSave, onLoad, onExport, onAddEntity, onAddRelation, onAddGeneralization }) => {
  const [isFileMenuOpen, setFileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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

  const goToDocumentation = () => {
    navigate('/documentation');
  };

  const goToInfo = () => {
    navigate('/info'); // Naviga alla pagina Informazioni
  };

  return (
    <div className="toolbar">
      <div className="toolbar-row">
        <div className="dropdown" ref={dropdownRef}>
          <button className="toolbar-button dropbtn" onClick={toggleFileMenu}>
            <FaFileAlt /> File
          </button>
          {isFileMenuOpen && (
            <div className="dropdown-content">
              <button className="dropdown-item" onClick={onNewSchema}>Nuovo Schema</button>
              <button className="dropdown-item" onClick={onLoad}>Carica</button>
              <button className="dropdown-item" onClick={onSave}>Salva</button>
              <button className="dropdown-item" onClick={onExport}>Esporta</button>
            </div>
          )}
        </div>
        <button className="toolbar-button" onClick={goToDocumentation}>
          <FaQuestionCircle /> Aiuto
        </button>
        <button className="toolbar-button" onClick={goToInfo}>
          <FaInfoCircle /> Informazioni
        </button>
      </div>
      <div className="action-buttons">
        <button className="toolbar-button" onClick={onAddEntity}>Aggiungi Entità</button>
        <button className="toolbar-button" onClick={onAddRelation}>Aggiungi Relazione</button>
        <button className="toolbar-button" onClick={onAddGeneralization}>Aggiungi Generalizzazione</button>
      </div>
    </div>
  );
};

export default Toolbar;
