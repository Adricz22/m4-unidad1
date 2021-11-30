import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav-bg holder">
            <nav className="navegacion">
                <a className="activo"><Link to="/">Home</Link></a>
                <a ><Link to="/nosotros">Nosotros</Link></a>
                <a ><Link to="/novedades">Novedades</Link></a>
                <a ><Link to="/contacto">Contacto</Link></a>
            </nav>
        </div>
    );
}

export default Nav;