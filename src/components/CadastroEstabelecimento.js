import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './CadastroEstabelecimento.css'; // Importa o CSS

const CadastroEstabelecimento = () => {
  const [nomeEstabelecimento, setNomeEstabelecimento] = useState('');
  const [codigoAcesso, setCodigoAcesso] = useState('');
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  const handleCadastro = (e) => {
    e.preventDefault();
    
    // Aqui você pode adicionar a lógica de cadastro, como chamadas à API.
    // Para o exemplo, vamos apenas simular o cadastro.

    // Limpa os campos após o cadastro
    setNomeEstabelecimento('');
    setCodigoAcesso('');

    console.log('Cadastro realizado (simulado):', {
      nome: nomeEstabelecimento,
      codigoDeAcesso: codigoAcesso,
    });

    // Redireciona para a página de LoginEstabelecimento
    navigate('/estabelecimento-login'); // Certifique-se de que essa rota está definida
  };

  return (
    <div className="dashboard"> {/* Adiciona a classe do dashboard */}
      <h2>Qual o nome do estabelecimento?</h2>
      <form onSubmit={handleCadastro}>
        <input
          type="text"
          value={nomeEstabelecimento}
          onChange={(e) => setNomeEstabelecimento(e.target.value)}
          placeholder="Nome do Estabelecimento"
          className="input-field" // Classe para o campo de entrada
        />
        <br />
        <h2>Escreva o seu código de acesso (6 dígitos):</h2>
        <input
          type="password"  // Use "password" para esconder o código de acesso
          value={codigoAcesso}
          onChange={(e) => setCodigoAcesso(e.target.value)}
          placeholder="Código de Acesso"
          className="input-field" // Classe para o campo de entrada
        />
        <br />
        <button type="submit" className="submit-button">Criar meu estabelecimento</button> {/* Classe para o botão */}
      </form>
    </div>
  );
};

export default CadastroEstabelecimento;
