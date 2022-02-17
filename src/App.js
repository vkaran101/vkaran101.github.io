import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <main className='App'>
      <div>
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<About/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>

      <Footer />
    </main>
  );
}

export default App;
