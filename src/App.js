import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <HashRouter basename="/" >

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/work' element={<Portfolio />} />
        </Routes>
      </HashRouter>

      {/* <!-- Contact me --> */}
      {/* <!--footer contact and link--> */}


    </div>
  );
}

export default App;
