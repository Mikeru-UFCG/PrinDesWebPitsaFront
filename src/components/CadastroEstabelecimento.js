import React, { useState } from 'react';
import config from '../config';  // Importa a configuração da API

const CadastroEstabelecimento = () => {
  const [nomeEstabelecimento, setNomeEstabelecimento] = useState('');
  const [codigoAcesso, setCodigoAcesso] = useState('');
  const [mensagem, setMensagem] = useState('');  // Estado para exibir mensagens de sucesso ou erro

  const handleCadastro = async (e) => {
    e.preventDefault();

    // Dados a serem enviados no corpo da requisição
    const novoEstabelecimento = {
      nome: nomeEstabelecimento,
      codigoDeAcesso: codigoAcesso,
    };

    try {
      // Faz a requisição POST para a API
      const response = await fetch(`${config.apiUrl}/estabelecimentos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoEstabelecimento),
      });

      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        setMensagem('Estabelecimento criado com sucesso!');
        setNomeEstabelecimento('');  // Limpa o campo após sucesso
        setCodigoAcesso('');         // Limpa o campo após sucesso
      } else {
        const errorData = await response.json();
        setMensagem(`Erro ao criar estabelecimento: ${errorData.error}`);
      }
    } catch (error) {
      setMensagem(`Erro ao criar estabelecimento: ${error.message}`);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Qual o nome do estabelecimento?</h2>
      <form onSubmit={handleCadastro}>
        <input
          type="text"
          value={nomeEstabelecimento}
          onChange={(e) => setNomeEstabelecimento(e.target.value)}
          placeholder="Nome do Estabelecimento"
          style={{ padding: '10px', margin: '10px', width: '300px' }}
        />
        <br />
        <h2>Escreva o seu código de acesso:</h2>
        <input
          type="password"  // Use "password" para esconder o código de acesso
          value={codigoAcesso}
          onChange={(e) => setCodigoAcesso(e.target.value)}
          placeholder="Código de Acesso"
          style={{ padding: '10px', margin: '10px', width: '300px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px' }}>Criar meu estabelecimento</button>
      </form>

      {/* Exibe a mensagem de sucesso ou erro */}
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastroEstabelecimento;
