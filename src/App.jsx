import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Allows use of Navlink, that will auto update the URL and trigger rendering of correct component without reloading //
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import '../src/css/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
      <Header />

      <main className="content">
      <Routes>
        <Route path="/" element={<AboutMe />} />  
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      </main>

      <Footer />
      </div>
    </Router>
  );
}

export default App
