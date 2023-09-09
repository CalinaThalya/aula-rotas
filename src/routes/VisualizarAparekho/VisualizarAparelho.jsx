import React from 'react';
import { useParams } from 'react-router-dom';
import aparelhos from './aparelhos'; // Importe a lista de aparelhos

const VisualizarAparelho = () => {
  const { id } = useParams();

  // Encontre o aparelho com base no ID da URL
  const aparelhoSelecionado = aparelhos.find((aparelho) => aparelho.id === parseInt(id));

  if (!aparelhoSelecionado) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <h1>{aparelhoSelecionado.nome}</h1>
      <img src={aparelhoSelecionado.imagem} alt={aparelhoSelecionado.nome} />
      <p>{aparelhoSelecionado.descricao}</p>
      {/* Outros detalhes do aparelho */}
    </div>
  );
}

export default VisualizarAparelho;
