import './App.css';

import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Home from '../Home/Home';
import About from '../About/About';
import FAQ from '../FAQ/FAQ';
import Contact from '../Contact/Contact';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;