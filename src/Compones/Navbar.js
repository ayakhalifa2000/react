import { Link } from "react-router-dom";
import logo from "../images/logo.png"
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div class="start">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="#"><img src={logo}/>   </a>
                </nav>
        </div>
        <ul>
            <li>
                <Link to ='/' id="home">Home</Link>
            </li>
            <li>
                <Link to ="/About" id="lineBar" >ABOUT</Link>
            </li>
            <li>
                <Link to ="/Contact" id="lineBar" >Contact</Link>
            </li>
            <li>
                <Link to ="/signin"><a href="#" class="btn  btn-lg active  sing" role="button" aria-pressed="true">SIGN IN / SIGN UP</a>
                </Link>
            </li>
        </ul>
        {/* <img src={logo}/> */}
        </div>
    );
}

export default Navbar;