import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>PrinDesWebPitsa, a sua plataforma de delivery de pizzas.</h1>
      <p>Escolha um perfil:</p>
      <div>
        <Link to="/estabelecimento-login">
          <button style={{ display: 'block', margin: '10px auto' }}>Sou Estabelecimento, quero vender pizzas</button>
        </Link>
        <Link to="/cliente-dashboard">
          <button style={{ display: 'block', margin: '10px auto' }}>Sou Cliente, quero fazer pedidos</button>
        </Link>
        <Link to="/entregador-dashboard">
          <button style={{ display: 'block', margin: '10px auto' }}>Sou Entregador, quero realizar deliveries</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
