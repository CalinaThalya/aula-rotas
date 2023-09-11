import { Link } from "react-router-dom"
import { ListaProdutos } from "../../components/ListaProduto"


export default function Produtos() {
  return (
  
    <main>
      <h1>Produtos</h1>
            {/* Mapeia a lista de produtos e renderiza um link para visualizar cada produto */}
      {ListaProdutos.map(prod => (
        <div key={prod.id}>
                    {/* Link para a página de edição do produto com base no 'id' */}
          <Link to={`/produtos/editar/${prod.id}`}>Visualizar o produto: {prod.nome}
                      {/* Exibe o texto 'Visualizar o produto' seguido pelo nome do produto */}
          </Link>
        </div>
      ))}
    </main>

    )
}
