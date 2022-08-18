import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </Router>
      </div>

  );
}

export default App;
