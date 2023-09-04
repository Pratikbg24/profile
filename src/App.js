import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './containers/About/About';
import Home from './containers/Home/Home';
import Eduction from './pages/Eduction/Eduction';
import Project from './pages/Projects/Project';
import Contact from './containers/Contact/contact';
function App() {
  return (
    <Router>

    <div className="App">
      <div className="main-body">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/eduction' element={<Eduction />} />
          <Route path='/experience' element={<Project />} />
        </Routes>
      </div>
    </div>
    </Router>

  );
}

export default App;
