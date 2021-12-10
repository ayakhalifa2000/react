import { Link } from "react-router-dom";
const Signin = () => {
    return ( 
        <>  
            <div id="pages">
                    <Link to ="/" exact>Home</Link>
                    <pre> /</pre>
                    <Link to="/About">About us</Link>
                </div>
            <div className='enter'>
                <h1>Sign in</h1>
                <hr/>
            </div>
            <fieldset className="border">
                <span className="account">
                    Sign in to your account
                </span>
                <p>aqswdefrtghujikjjhttff sit amet, <Link to ="/Register">Register</Link>adimisicing eliti. Quo njuill asdfghjkl; <br/> dolorement incomeimfd nemo memo underfind account queen odio </p>
            <div class="form-floating mb-3">
                <label for="floatingInput">Username/Email*</label>
                <input type="email" class="form-control" id="floatingInput" required />
            </div>
            <div class="form-floating">
                <label for="floatingPassword">Password*</label>
                <input type="password" class="form-control" id="floatingPassword"  required/>
            </div>
            <hr/>
            <a href="#" className="forget">forget password?</a>
            <button type="button" class="btn  siIn">Sign in</button>
            </fieldset>
        </>
    );
}

export default Signin;