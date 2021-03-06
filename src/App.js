import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import EditProject from './components/EditProject';
import ProjectAAHW from './components/ProjectAAHW';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <main className='App'>
      <div>
      </div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<About/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/AAHW' element={<ProjectAAHW />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/editproject' element={<EditProject />} />
        </Routes>
      </Router>

      <Footer />
    </main>
  );
}

export default App;
