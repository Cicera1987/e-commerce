import { Link } from "react-router-dom"
import "./styles.css"

interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
    return (
        <div className="header">
            <h1>{title}</h1>
            <nav className="header-nav">
                <Link className="header-link"  to="/home">HOME</Link>
                <Link className="header-link" to="/products">PRODUTOS</Link>
                <Link className="header-link"  to="/contacts">CONTATO</Link>
            </nav>
        </div>

    )
}


export default Header