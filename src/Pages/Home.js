import { Fragment } from 'react';
import { Link } from "react-router-dom";

import bg_header from "../images/bg_header.jpg";
const Home = () => {
    return ( 
        <Fragment>
            <img className="bg_header" src={bg_header} />
            <div className="concept">
            <h1> AWESOME, SUTOMIZABLE, FREE </h1>
            <h5>PROGRESSUS: Free buiness boostrap template by <a href="#" className="get">GET TEMPLATE</a></h5>
            <button type="button" class="btn  infromation btn-lg">MORE INFO</button>
            <button type="button" class="btn  btn-lg  dowm-now">DOWNLOAD NOW</button>
            </div>
            <section className="container">
                <p className="title"> The best place to tell people why they are here</p>
                <p className="meaning"> the differenet betweeen invoement and commlitments is like an eggs and ham_breakfast <br/>
                the chiken was involved the pig was commitied</p>
            </section>
            <h4>Reasons to use this template</h4>
            <div class="card-group">
            <div class="card">
                    <i class="fas fa-cogs"></i>
                <div class="card-body">
                    <h5 class="card-title">boostrap-prowed</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
            </div>
            <div class="card">
                    <i class="fas fa-bolt"></i>
                <div class="card-body">
                    <h5 class="card-title">fat-free</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
            </div>
            <div class="card">
                    <i class="fas fa-heart"></i>
                <div class="card-body">
                    <h5 class="card-title">creative commons</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
            </div>
            <div class="card container">
                    <i class="far fa-smile"></i>
                <div class="card-body">
                    <h5 class="card-title">Author`s support</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
            </div>
        </div>
        <h1>Frequentlu Asked Quesrions</h1>
        <div id="data">
                    <div class="data"> 
                        <h3>Which code editor would you recommened ?</h3>
                        <p>I`d highly recommend you <a href="#">Subime Text</a> -a free to try text editor which I`m using  dailly. <br/>
                        Awesome too!!</p>
                    </div>
                    <div class="data2">
                    <h3> Can I use it build a site for my clienr?</h3>
                    <p>I`d highly recommend you <a href="#">Subime Text</a> -a free to try text editor which I`m using  dailly. <br/>
                    Awesome too!!</p>
                    </div>
                    <div class="data3">
                        <h3> Nice header. Where do I find more images like that one ?</h3>
                        <p>I`d highly recommend you <a href="#">Subime Text</a> -a free to try text editor which I`m using  dailly. <br/>
                        Awesome too!!</p>
                        </div>
                        <div class="data4"> 
                        <h3>Can you customize this template for me?</h3>
                        <p>I`d highly recommend you <a href="#">Subime Text</a> -a free to try text editor which I`m using  dailly. <br/>
                        Awesome too!!</p>
                    </div>
                </div>
                <section id="learnMore">
                    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action
                    </p>
                    <button>Learn More</button>
                </section>
                
    </Fragment>
    );
}
export default Home;