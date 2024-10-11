import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DashboardPlaceholder from './components/DashboardPlaceholder';
import LoginEstabelecimento from './components/LoginEstabelecimento';
import CadastroEstabelecimento from './components/CadastroEstabelecimento';
import PerfilEstabelecimento from './components/PerfilEstabelecimento';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cliente-dashboard" element={<DashboardPlaceholder />} />
        <Route path="/entregador-dashboard" element={<DashboardPlaceholder />} />
        <Route path="/estabelecimento-login" element={<LoginEstabelecimento />} />
        <Route path="/estabelecimento-cadastro" element={<CadastroEstabelecimento />} />
        <Route path="/estabelecimento-perfil" element={<PerfilEstabelecimento />} />
      </Routes>
    </Router>
  );
};

export default App;
