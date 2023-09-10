import {useParams, useNavigate } from "react-router-dom"
import { ListaProdutos } from "../../components/ListaProduto"

export default function EditarProduto() {

  const lista = ListaProdutos
  const navegacao = useNavigate()
  const {id} = useParams()

  const proc = lista.filter(prod => prod.id == id)
  const produto = proc[0]
  
  const salvar = () => {
    alert(`Produto: ${produto.nome} salvo com sucesso!`)
    return navegacao('/produtos')
  }
  
  return (
    <main>
        <h1>Visualizar Produto</h1>
        <p>Visualizando os dados do produto: {produto.nome}</p>
        <img src={produto.imagem} alt={produto.nome} />
        <button onClick={salvar}>Salvar</button>
    </main>
  )
}
