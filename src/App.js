import React from 'react';
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Events from './Events.js';
import About from './About.js';
import ContactForm from './ContactForm.js';
import Footer from './Footer.js';
import './App.css';

function App() {
return (
	<Router>
	  <Navbar />
      <div id="content">
        <Switch>
        {/* <button class="btn"><i class="fa fa-home"></i> Home</button> */}
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/events' component={Events} />
          <Route path='/contact' component={ContactForm}/>
        </Switch>
      </div>
	  <Footer/>
	</Router>
);
}

export default App;