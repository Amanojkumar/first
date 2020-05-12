import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
 
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/About.js'; 

import Contact from './components/Contact.js';
import Home from './components/Home.js'; 
import './App.css'; 
  
class App extends Component { 
  render() { 
    return ( 
       <Router>
	   <div className="container">
         <div>
		 <nav className="navbar navbar-expand-sm bg-light navbar-light">	   
           <div className="App"> 
            <ul className="navbar-nav bg-red"> 
              <li className='nav-item '> 
                <Link to='/' className="nav-link">Home</Link> 
              </li> 
              <li className='nav-item'> 
                <Link to='/About' className="nav-link ">About Us</Link> 
              </li> 
              <li className='nav-item'> 
                <Link to='/Contact' className="nav-link">Contact Us</Link> 
              </li> 
            </ul>
           </div>
         </nav>	
     		 
            <Switch> 
              <Route exact path='/' component={ Home }></Route> 
              <Route exact path='/about' component={ About }></Route> 
              <Route exact path='/Contact' component={ Contact }></Route> 
            </Switch> 
          </div> 
	</div>
       </Router> 
   ); 
  } 
} 
  
export default App; 