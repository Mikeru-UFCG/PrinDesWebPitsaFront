import React, { useState } from 'react';
import './PerfilEstabelecimento.css'; // Importar arquivo de estilos
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const PerfilEstabelecimento = () => {
  const navigate = useNavigate(); // Criar instância do navegador
  const [activeTab, setActiveTab] = useState(null);
  const [saborData, setSaborData] = useState([]);
  const [entregadoresEmAnalise, setEntregadoresEmAnalise] = useState([]);
  const [entregadoresAssociados, setEntregadoresAssociados] = useState([]);
  const [pedidosProcessados, setPedidosProcessados] = useState([]);
  const [pedidosEmPreparo, setPedidosEmPreparo] = useState([]);
  const [pedidosProntos, setPedidosProntos] = useState([]);
  const [pedidosEmRota, setPedidosEmRota] = useState([]);
  const [mudarNomeEstabelecimento, setMudarNomeEstabelecimento] = useState('');
  const [metodosPagamento, setMetodosPagamento] = useState({
    pix: false,
    debito: false,
    credito: false,
  });

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const handleAddSabor = () => {
    // Lógica para adicionar sabor (a ser implementada)
  };

  const handleFinalizeDay = () => {
    navigate('/estabelecimento-login');
    // Lógica para redirecionar para LoginEstabelecimento (a ser implementada)
  };

  return (
    <div className="dashboard">
      <h2>Vamos vender umas pizzas?</h2>
      
      <div className="button-container">
        <button onClick={() => toggleTab('notificacoes')}>Notificações</button>
        {activeTab === 'notificacoes' && <div className="tab-content">Sem pedidos em andamento</div>}

        <button onClick={() => toggleTab('cardapio')}>Cardápio</button>
        {activeTab === 'cardapio' && (
          <div className="tab-content">
            {saborData.map((sabor) => (
              <div key={sabor.nome}>
                <h3>{sabor.nome}</h3>
                <p>{sabor.descricao}</p>
                <p>Preço Média: {sabor.precoMedia}</p>
                <p>Preço Grande: {sabor.precoGrande}</p>
                <p>Clientes Interessados: {sabor.clientesInteressados}</p>
                <button style={{ backgroundColor: sabor.disponivel ? 'green' : 'red' }}>
                  {sabor.disponivel ? 'Disponível' : 'Indisponível'}
                </button>
                <button>Excluir</button>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => toggleTab('adicionarSabor')}>Adicionar sabor</button>
        {activeTab === 'adicionarSabor' && (
          <div className="tab-content">
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Descrição" />
            <input type="number" placeholder="Valor da Pizza Média" />
            <input type="number" placeholder="Valor da Pizza Grande" />
            <button onClick={handleAddSabor}>Ok</button>
          </div>
        )}

        <button onClick={() => toggleTab('entregadoresEmAnalise')}>Exibir entregadores em análise</button>
        {activeTab === 'entregadoresEmAnalise' && (
          <div className="tab-content">
            {entregadoresEmAnalise.map((entregador) => (
              <div key={entregador.nome}>
                <p>{entregador.nomeCompleto}</p>
                <p>Placa: {entregador.placa}</p>
                <p>Tipo: {entregador.tipo}</p>
                <p>Cor: {entregador.cor}</p>
                <button>Aceitar</button>
                <button>Rejeitar</button>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => toggleTab('entregadoresAssociados')}>Exibir entregadores associados</button>
        {activeTab === 'entregadoresAssociados' && (
          <div className="tab-content">
            {entregadoresAssociados.map((entregador) => (
              <div key={entregador.nome}>
                <p>{entregador.nomeCompleto}</p>
                <p>Placa: {entregador.placa}</p>
                <p>Tipo: {entregador.tipo}</p>
                <p>Cor: {entregador.cor}</p>
                <p>{entregador.disponibilidade ? 'Disponível para entregas' : 'Indisponível'}</p>
                <button>Desvincular</button>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => toggleTab('pedidosProcessados')}>Exibir pedidos processados</button>
        {activeTab === 'pedidosProcessados' && (
          <div className="tab-content">
            {pedidosProcessados.map((pedido) => (
              <div key={pedido.id}>
                <p>Cliente: {pedido.nomeCliente}</p>
                <p>Endereço: {pedido.endereco}</p>
                <p>Total: {pedido.valorTotal}</p>
                <p>Pizzas: {pedido.pizzas.map(pizza => pizza.nome).join(', ')}</p>
                <button>Aceitar</button>
                <button>Rejeitar</button>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => toggleTab('pedidosEmPreparo')}>Exibir pedidos em preparo</button>
        {activeTab === 'pedidosEmPreparo' && (
          <div className="tab-content">
            {pedidosEmPreparo.map((pedido) => (
              <div key={pedido.id}>
                <p>Pizzas: {pedido.pizzas.map(pizza => pizza.nome).join(', ')}</p>
                <p>Total: {pedido.valorTotal}</p>
                <button>Pedido pronto</button>
                <button>Cancelar</button>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => toggleTab('pedidosProntos')}>Exibir pedidos prontos</button>
        {activeTab === 'pedidosProntos' && (
          <div className="tab-content">
            {pedidosProntos.map((pedido) => (
              <div key={pedido.id}>
                <p>Cliente: {pedido.nomeCliente}</p>
                <p>Endereço: {pedido.endereco}</p>
                <p>Pizzas: {pedido.pizzas.map(pizza => pizza.nome).join(', ')}</p>
                <p>Total: {pedido.valorTotal}</p>
                <button>Atribuir a entregador</button>
                <button>Cancelar pedido</button>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => toggleTab('pedidosEmRota')}>Pedidos em rota</button>
        {activeTab === 'pedidosEmRota' && (
          <div className="tab-content">
            {pedidosEmRota.map((pedido) => (
              <div key={pedido.id}>
                <p>Cliente: {pedido.nomeCliente}</p>
                <p>Endereço: {pedido.endereco}</p>
                <p>Pizzas: {pedido.pizzas.map(pizza => pizza.nome).join(', ')}</p>
                <p>Total: {pedido.valorTotal}</p>
                <p>Entregador: {pedido.entregador.nomeCompleto}</p>
                <p>Placa: {pedido.entregador.placa}</p>
                <p>Tipo: {pedido.entregador.tipo}</p>
                <p>Cor: {pedido.entregador.cor}</p>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => toggleTab('configuracoes')}>Configurações</button>
        {activeTab === 'configuracoes' && (
          <div className="tab-content">
            <input
              type="text"
              value={mudarNomeEstabelecimento}
              onChange={(e) => setMudarNomeEstabelecimento(e.target.value)}
              placeholder="Mudar nome do estabelecimento"
            />
            <button>Mudar</button>
            <h4>Métodos de pagamento disponíveis</h4>
            <label>
              <input
                type="checkbox"
                checked={metodosPagamento.pix}
                onChange={() => setMetodosPagamento({ ...metodosPagamento, pix: !metodosPagamento.pix })}
              /> PIX
            </label>
            <label>
              <input
                type="checkbox"
                checked={metodosPagamento.debito}
                onChange={() => setMetodosPagamento({ ...metodosPagamento, debito: !metodosPagamento.debito })}
              /> Débito
            </label>
            <label>
              <input
                type="checkbox"
                checked={metodosPagamento.credito}
                onChange={() => setMetodosPagamento({ ...metodosPagamento, credito: !metodosPagamento.credito })}
              /> Crédito
            </label>
          </div>
        )}

        <button onClick={handleFinalizeDay}>Finalizar dia</button>
      </div>
    </div>
  );
};

export default PerfilEstabelecimento;
