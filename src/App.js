import logo from './logo.svg';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
         <Routes>
            <Route exact path='/' element={<Home/>}/>
         </Routes>
      </div>
    </Router>
  );
}

export default App;
