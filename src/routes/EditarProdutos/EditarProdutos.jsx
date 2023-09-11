import {useParams, useNavigate } from "react-router-dom"
import { ListaProdutos } from "../../components/ListaProduto"

export default function EditarProduto() {
  // Obtém a lista de produtos e funções de navegação do React Router

  const lista = ListaProdutos
  const navegacao = useNavigate()
    // Obtém o parâmetro 'id' da URL usando o hook 'useParams'
  const {id} = useParams()
  // Filtra a lista de produtos para encontrar o produto com o 'id' correspondente
  const proc = lista.filter(prod => prod.id == id)
   // Pega o primeiro produto encontrado (ou undefined se não encontrado)
  const produto = proc[0]
    // Função para salvar o produto (simula uma ação de salvar)
        // Exibe um alerta com o nome do produto
  const salvar = () => {
    alert(`Produto: ${produto.nome} salvo com sucesso!`)
        // Redireciona de volta para a página de produtos
    return navegacao('/produtos')
  }
  
  return (
    <main>
        <h1>Visualizando Produto</h1>
        <p>Preço: R$ {produto.preco}</p>
        <img src={produto.imagem} alt={produto.nome} />
        <button onClick={salvar}>Salvar</button>
    </main>
  )
}
