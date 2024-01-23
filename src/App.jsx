import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/sidebar';
import Home from './components/Home/index';
import About from './components/About/index';
import Services from './components/Services/index';
import Projects from './components/Projects/index';
import Contact from './components/contact/index';
import Resume from './components/resume/resume';
import { UserProvider } from './UserContext'; // Import the context
import './App.css';
 import {user} from './userDetails';
function App() {
  
  return (
    <Router>
    <UserProvider user={user}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </UserProvider>
  </Router>
  );
}


export default App;
