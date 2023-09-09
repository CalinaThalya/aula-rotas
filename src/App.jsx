import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}
export default App
export default function Home() {
  return (
    <main>
      <h1>BEM VINDO AO HOME DA LOJA TECH</h1>
      <div className="promocao">
        <img src="/public/fotooo.jpg" alt="promoção" />
        <p>descrição</p>
      </div>

    </main>
  );
}
