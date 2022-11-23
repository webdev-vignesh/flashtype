import logo from '../images/logo.png';
import '../stylesheets/Navbar.css';

const Navbar = () => {
    return(
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} className='nav-logo' alt='logo' />
                <p className='nav-title'>FLASHTYPE</p>
            </div>
            <div className='nav-right'>
                <h1><a href='##' className='nav-link'>AAM</a></h1>
            </div>
        </div>
    )
}

export default Navbar;