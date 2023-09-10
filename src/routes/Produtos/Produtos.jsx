import { Link } from "react-router-dom"
import { ListaProdutos } from "../../components/ListaProduto"


export default function Produtos() {
  return (
  
    <main>
      <h1>Produtos</h1>
      {ListaProdutos.map(prod => (
        <div key={prod.id}>
          <Link to={`/produtos/editar/${prod.id}`}>Visualizar o produto: {prod.nome}
          </Link>
        </div>
      ))}
    </main>

    )
}
