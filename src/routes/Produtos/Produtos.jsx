import { Link } from "react-router-dom"
import { ListaProdutos } from "../../components/ListaProduto"


export default function Produtos() {
  return (
  
    <main>
      <h1>Produtos</h1>
      {ListaProdutos.map(prod => (
        <div key={prod.id} className="ListaProduto">
                    {/* Link para a página de edição do produto */}
          <Link to={`/produtos/editar/${prod.id}`} className="textolink">Visualizar o produto: {prod.nome}
                      {/* Exibe o texto 'Visualizando o produto' e os dados dele */}
          </Link>
        </div>
      ))}
    </main>

    )
}
