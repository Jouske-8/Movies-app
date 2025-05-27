import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Navbar from './Components/Navbar';
import Display from './Pages/Display';
import './css/App.css';

function App() {
  
  return (
    <>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Display />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
