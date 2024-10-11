import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginEstabelecimento.css'; // Importa o CSS

const LoginEstabelecimento = () => {
  const [codigoAcesso, setCodigoAcesso] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você poderia validar o código de acesso
    // Se o código for válido, redirecionar para o perfil do estabelecimento
    if (codigoAcesso) {
      console.log('Tentando logar com código de acesso:', codigoAcesso);
      navigate('/estabelecimento-perfil'); // Direciona ao perfil do estabelecimento
    } else {
      alert('Por favor, insira um código de acesso válido.'); // Feedback simples
    }
  };

  return (
    <div className="dashboard"> {/* Adiciona a classe do dashboard */}
      <h2>Escreva seu código de acesso:</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={codigoAcesso}
          onChange={(e) => setCodigoAcesso(e.target.value)}
          placeholder="Código de acesso"
          className="input-field" // Classe para o campo de entrada
        />
        <br />
        <button type="submit" className="submit-button">Entrar</button> {/* Classe para o botão */}
      </form>
      <button onClick={() => navigate('/estabelecimento-cadastro')} className="register-button">
        Realizar cadastro
      </button> {/* Classe para o botão de cadastro */}
    </div>
  );
};

export default LoginEstabelecimento;
