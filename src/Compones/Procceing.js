import { Link } from "react-router-dom";
const Precceing = () => {
    return ( 
        <div id="pagePro">
            <Link to ="/" exact>Home</Link>
            <pre> |</pre>
            <Link to="/About">About us</Link>
            <pre>|</pre>
            <Link to ="/Contact">Contact</Link>
            <pre>|</pre>
            <Link to ="/Signin">Sign in</Link>
        </div>
    );
}
export default Precceing;