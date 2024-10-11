import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginEstabelecimento = () => {
  const [codigoAcesso, setCodigoAcesso] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você consumiria a API para login
    // Exemplo: fetch para a rota de login de estabelecimento.
    console.log('Tentando logar com código de acesso:', codigoAcesso);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Escreva seu código de acesso:</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={codigoAcesso}
          onChange={(e) => setCodigoAcesso(e.target.value)}
          placeholder="Código de acesso"
          style={{ padding: '10px', margin: '10px', width: '300px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px' }}>Entrar</button>
      </form>
      <button onClick={() => navigate('/estabelecimento-cadastro')} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Realizar cadastro
      </button>
    </div>
  );
};

export default LoginEstabelecimento;
