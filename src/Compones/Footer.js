const Footer = () => {
    return (
        <footer>
                    <div className='contact'>
                        <h2>Concat</h2>
                        <pre>+234 23 9873237 </pre>
                        <p className="email">some.email@somewhere.com</p>
                        <p className="adderes">234 Hiddden Pound Road, Ashland City, TN 36015</p>
                    </div>
                    <div id='follwMe'>
                           <h2 className="tieFollow">Follow me </h2>
                            <a href ="https://twitter.com/explore/"><i class="fab fa-twitter"></i></a>
                           <a href ="https://getbootstrap.com/docs/5.1/components/navs-tabs/"><i class="fas fa-volleyball-ball"></i></a>
                           <a href ="https://github.com/ayakhalifa2000"><i class="fab fa-github"></i></a>
                           <a href ="https://ar-ar.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                    </div>
                    <div id="text">
                           <h4 className="widget">Text Widget </h4>
                           <p className="info"> 
                              Text messages are used for personal, family, business and social purposes. Governmental<br/>
                               and non-governmental organizations use text messaging for communication between colle<br/>
                               agues. In the 2010s, the sending of short informal messages became an accepted part of<br/>
                                many cultures, as happened earlier with emailing.[1] This makes texting a quick and e<br/>
                                asy way to communicate with friends, family and colleagues, including in contexts whe<br/>
                                re a call would be impolite or inappropriate (e.g., calling very late at night or whe<br/>
                                n one knows the other person is busy with family or work activities)
                           </p>
                    </div>
         </footer>
    );
}

export default Footer;