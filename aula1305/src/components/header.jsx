import { Link } from "react-router-dom"
import '../components/header.css'


function header() {
    return (

        <header className="cabecalho">
            <nav className="">
                <h1 className="h1">React</h1>
               
                    <Link to="/">  <button className="bt1">Inicio</button> </Link>
                
                
                    <Link to="/sobre"> <button className="bt1">Sobre </button></Link>
                
               
                    <Link to="/contato"> <button className="bt1"> Contato </button></Link>

                    <Link to="produtos">  <button className="bt1">Produtos</button> </Link>

                    <Link to="perfil">  <button className="bt1">Perfil</button> </Link>
                
            </nav>






        </header>

    )

}

export default header