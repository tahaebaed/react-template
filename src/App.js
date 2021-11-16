import React, { Component } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Components/Index';

class App extends Component {
  render() {
    return (
      <Router className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />} exact />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
