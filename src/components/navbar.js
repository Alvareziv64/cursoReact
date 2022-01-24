import './navbar.css'
import CardWidget from './CardWidget';

const NavBar = () => {
    return (

        <nav className="navbar">
            <ul>
                <li> <CardWidget/> </li>
                <li>Home</li>
                <li>Galeria</li>
                <li>Info</li>
                <li>Contacto</li>
            </ul>
        </nav>

    );
};



export default NavBar;
