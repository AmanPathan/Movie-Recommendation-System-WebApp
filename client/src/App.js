import './App.css';
import Greet from './components/Greet';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Result from './components/Result';
import { useState } from 'react';

function App() {
  return (
    <>
      <div className='herosection'>
        <div className='container col-md-11 '>
        <Navbar/>
        <Greet/>
        </div>
      </div>
      <Home/>
      <Result/>
    </>
  );
}

export default App;
