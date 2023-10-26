import { SiRiotgames} from 'react-icons/si';
import CartWidget from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return(
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
        <Link to={'/'} className="navbar-brand"><SiRiotgames/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
            <Link to={'/aboutUs'} className="nav-link">About us</Link>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to={props.link} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
            </Link>
            <ul className="dropdown-menu">
                <li><Link to={'/itemList/gaming'} className="dropdown-item" >Gaming</Link></li>
                <li><Link to={'/itemList/office'} className="dropdown-item" >Office</Link></li>
                <li><Link to={'/itemList/others'} className="dropdown-item" >Others</Link></li>
            </ul>
            </li>
            <li className="nav-item">
            <Link className="nav-link disabled" to={"/arrivals"}>Arrivals!</Link>
            </li>
        </ul>
        <Link to={'/cart'} className='nav-link'><CartWidget/></Link>
        </div>
    </div>
    </nav>
    );
};

export default NavBar;