import './navbar.css'
import CardWidget from '../cartWidget/cartWidget';
import Logo from '../Logo/Logo'

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href=".."><Logo/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="..">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="..S">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='..'>Disabled</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href=".." id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <CardWidget/>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="..S">Action</a></li>
                  <li><a className="dropdown-item" href="..S">Another action</a></li>
                  <li><a className="dropdown-item" href="..S">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};



export default NavBar;