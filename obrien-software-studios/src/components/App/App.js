import './App.css';

import Navigation from '../Navigation/Navigation';

import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Home from '../Home/Home';
import About from '../About/About';
import FAQ from '../FAQ/FAQ';
import Contact from '../Contact/Contact';

import InvalidPath from '../InvalidPath/InvalidPath';

import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/education' element={<Education />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/faq' element={<FAQ />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='*' element={<InvalidPath />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;