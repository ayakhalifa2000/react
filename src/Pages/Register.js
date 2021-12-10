import { Link } from "react-router-dom";
const Register = ( ) => {

    return ( 
        <>      
                <div id="pages">
                    <Link to ="/Home" exact>Home</Link>
                    <pre> /</pre>
                    <Link to="/Contact">Contact</Link>
                </div>
                <div className='enter'>
                    <h1>Register</h1>
                    <hr/>
                </div>
                <fieldset className="border">
                <span className="account">
                    Register a new account
                </span>
                <p>aqswdefrtghujikjjhttff sit amet, <Link to ="/Signin">Sign in</Link>adimisicing eliti. Quo njuill asdfghjkl; <br/> dolorement incomeimfd nemo memo underfind account queen odio </p>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Email Address*</label>
                    <input type="email"class="form-control" id="formGroupExampleInput2"/>
                </div>
                <div class="passSty">
                    <label for="password" class="form-label stars">Password</label>
                        <input type="password" id="password" class="form-control"/>
                        <label for="passwordco" class="form-label stars2">Password Confirm</label>
                        <input type="password" id ="passwordco" class="form-control"/>
                </div>
                <hr/>
                <div class="form-check chechIcon">
                    <input class="form-check-input icon" type="checkbox" id="flexCheckDefault"/>
                    <label class="form-check-label textIcon" for="flexCheckDefault">
                        I have read the <Link to="/Terms and Conditions">Terms and Conditions</Link>
                    </label>
                    <button type="button" class="btn  register">Register</button>
                </div>
                </fieldset>
        </>
    );
}

export default Register;