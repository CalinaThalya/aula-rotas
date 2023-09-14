import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <nav className="menu">
 <img src="/icone.png" alt="Carrinho de Compras" />
         <Link to='/'>Home</Link>
        <span> | </span>
        <Link to='/produtos'>Produtos</Link>
    </nav>
  )
}
