import { Link } from "react-router-dom";
const Contact = ({ }) => {
    return (
        <>  
            <div id="pages">
                    <Link to ="/" exact>Home</Link>
                    {/* <Home/> */}
                    <pre> /</pre>
                    <Link to="/About">About us</Link>
                    {/* <Register/> */}
                </div>
            <nav>
            <h1 id="conUs">Contact us</h1>
            <hr/>
            <p className="formData">
                We would love to hear from you. Interested in working together? Fill out from below with some info about your project and I will get back <br/>
                to you as soon as I can. Please allow a couple days for me to respond.
            </p>
            </nav>
            <formHTML id='formInp'>
                <input type="text" placeholder="Name" className="form-control" required id="nameAll" name="gender"/>
                <input type="email" placeholder="Email" className="form-control" required id="emailAll" name="gender"/>
                <input type="text" placeholder="Phone"  className="form-control" required id="phoneAll" name="gender"/>
                <textarea id="message" placeholder="Type your message here"></textarea>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                                    Sign up for newsletter
                    </label>
                </div>
                <button type="button"  class="btn active senMess  form-control " data-bs-toggle="button" autocomplete="off" aria-pressed="true">Send message</button>
            </formHTML>
            <section className="addPho">
                <h5>Adders</h5>
                <p>94 the big city in cairo <br/>floor2 number9</p>
                <h5>Phone</h5>
                <p>00112628784</p>
            </section>
        </>
    );
}

export default Contact;