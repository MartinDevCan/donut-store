import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './Contact';
import Menu from './Home';
import About from './About';
import './App.css';


function App() {

  
  return(<Router>
    <nav>
      <Link to="/about" className="link">About</Link>
      <Link to="/menu" className="link">Menu</Link>
      <Link to="/contact" className="link">Contact</Link>
    </nav>

    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>
  )
}


export default App;
