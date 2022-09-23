import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer';
import Home from './pages/Home';
import Clothes from './pages/Clothes';
function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/clothes' element={<Clothes/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;