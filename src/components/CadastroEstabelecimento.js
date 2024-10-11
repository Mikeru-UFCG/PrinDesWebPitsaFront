import React, { useState } from 'react';

const CadastroEstabelecimento = () => {
  const [nomeEstabelecimento, setNomeEstabelecimento] = useState('');
  const [codigoAcesso, setCodigoAcesso] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    // Aqui você faria o fetch para a API de cadastro
    console.log('Cadastro solicitado:', { nomeEstabelecimento, codigoAcesso });
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
          type="text"
          value={codigoAcesso}
          onChange={(e) => setCodigoAcesso(e.target.value)}
          placeholder="Código de Acesso"
          style={{ padding: '10px', margin: '10px', width: '300px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px' }}>Criar meu estabelecimento</button>
      </form>
    </div>
  );
};

export default CadastroEstabelecimento;
