import './App.css';
import { BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
import Navbar from './Compones/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './Compones/Footer';
import Tiler from './Compones/Tiler';
import { Fragment } from 'react';
import Signin from './Pages/Signin';
import Register from './Pages/Register';
import Procceing from './Compones/Procceing';
function App() {
return (
      <Fragment>
            <div className="App">
      <Router>
      <Navbar/>
            <Switch>
            <Route path="/" exact>
                  <Home/>
            </Route>
            <Route path="/About">
                  <About/>
            </Route>
            <Route path="/Contact">
                  <Contact/>
            </Route>
            <Route path="/Signin">
                  <Signin/>
            </Route>
            <Route path="/Register">
                  <Register/>
            </Route>
            </Switch>
            <Procceing/>
      </Router>
      <Footer/>
      <Tiler/>
      </div>
      </Fragment>
);
}

export default App;
