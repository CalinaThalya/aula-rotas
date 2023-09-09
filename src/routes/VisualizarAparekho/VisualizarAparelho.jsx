import React from 'react';
import { useParams } from 'react-router-dom';
import aparelhos from './aparelhos'; // Importe a lista de aparelhos
import { ListaProdutos } from '../../components/ListaProduto';

const VisualizarAparelho = () => {
  const { id } = useParams();

  // Encontre o aparelho com base no ID da URL
  const aparelhoSelecionado = aparelhos.find((aparelho) => aparelho.id === parseInt(id));

  if (!ListaProdutos) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <h1>{ListaProdutos.nome}</h1>
      <img src={ListaProdutos.imagem} alt={prod.nome} />
      <p>{ListaProdutos.preco}</p>
    </div>
  );
}

export default VisualizarAparelho;
