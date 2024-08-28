import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Allows use of Navlink, that will auto update the URL and trigger rendering of correct component without reloading //
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />  {/* path is / so AboutMe section can be the default page/section */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<footer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
