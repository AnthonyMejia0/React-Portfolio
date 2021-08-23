import './navbar.scss'
//import logo from '../../../public/assets/AM_LOGO.png';
import {Person, Phone, MailOutline} from '@material-ui/icons/';

function NavBar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">
                        <img src="assets/images/AM_LOGO.png" alt="My Personal logo" />
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span className="phone">Anthony Mejia</span>
                    </div>
                    <div className="itemContainer">
                        <Phone className="icon" />
                        <span className="phone">+1 (626) 202-4909</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon" />
                        <span className="mail">mejia.anthony96@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
