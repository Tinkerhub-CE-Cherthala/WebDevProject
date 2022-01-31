import React from 'react';
import './App.css';
import Mainbg from './Mainbg';
import Event from './Event';
import Contact from './Contact';


function App() {
  return (
    <>
      <Mainbg />
      <div className='bwme'></div>
      <Event />    
      <Contact /> 
    </>
  );
}

export default App;
