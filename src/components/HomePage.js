import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Certifique-se de que o caminho está correto

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>PDW Pizzas, a sua plataforma de delivery de pizzas.</h1>
      <p>Escolha uma opção para continuar:</p>
      <div className="button-container">
        <Link to="/estabelecimento-login">
          <button>Sou estabelecimento</button>
        </Link>
        <Link to="/cliente-dashboard">
          <button>Sou cliente</button>
        </Link>
        <Link to="/entregador-dashboard">
          <button>Sou entregador</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
