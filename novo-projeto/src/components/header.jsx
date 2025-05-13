import './header.css'

function header (){
    return (
        <header className="header">
            <h1>Meu site</h1>
            <nav>
                <ul>
                    <li><a href="#">inicio</a></li>
                    <li><a href="#">produtos</a></li>
                    <li><a href="#"> contato</a></li>
                </ul>



            </nav>
        </header>
    )
}

export default header