import { SiRiotgames} from 'react-icons/si';
import CartWidget from "./CartWidget"


const NavBar = (props) => {
    return(
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
        <a className="navbar-brand" href={props.link}><SiRiotgames/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={props.link}>Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href={props.link}>About us</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href={props.link} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href={props.link}>Gaming</a></li>
                <li><a className="dropdown-item" href={props.link}>Office</a></li>
                <li><a className="dropdown-item" href={props.link}>Others</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link" href={props.link}>Arrivals!</a>
            </li>
        </ul>
        <CartWidget/>
        </div>
    </div>
    </nav>
    );
};

export default NavBar;