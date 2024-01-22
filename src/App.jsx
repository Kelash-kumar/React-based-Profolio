import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/sidebar';
import Home from './components/Home/index';
import About from './components/About/index';
import Services from './components/Services/index';
import Projects from './components/Projects/index';
import Contact from './components/contact/index';
import Resume from './components/resume/resume';
import './App.css';
function App() {
  
  

  const cursor = document.querySelector('#cursor');
  const stalker = document.querySelector('#stalker');
  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    stalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  return (
    <Router>
      <>
      <div id="cursor"></div>
  <div id="stalker"></div>
   
        <Sidebar />
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </>
    </Router>
  );
}


export default App;
