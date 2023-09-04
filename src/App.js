import logo from './logo.svg';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Features from './components/pages/Features';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
         <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/aboutUs' element={<AboutUs/>}/>
            <Route exact path='/features' element={<Features/>}/>
            <Route exact path='/gallery' element={<Gallery/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
         </Routes>
      </div>
    </Router>
  );
}

export default App;
