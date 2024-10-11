import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPlaceholder.css'; // Certifique-se de que o caminho está correto

const DashboardPlaceholder = () => {
  return (
    <div className="dashboard">
      <h1>Ainda não implementado, volte mais tarde!</h1>
      <Link to="/">
        <button className="back-button">Voltar à Homepage</button>
      </Link>
    </div>
  );
};

export default DashboardPlaceholder;
