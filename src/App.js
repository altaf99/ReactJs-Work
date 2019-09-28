import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
    {/* to include Greet component into app.js we simply need to create
    coustom html tag */}
    <Greet name="Altaf" heroname="Iron Man">
      This is Children Props.
      Pass Data In between this when you have no clue what is
      going to pass as props.
    </Greet> 
    {/* name="Altaf" means passing parameter or props */}
    <Greet name="Diana" heroname="Bat Women">
    <button>Action</button>
    </Greet>
    <Greet name="Emma" heroname="Black Lady" /> 
    {/* <Welcome /> */}
    {/* <Hello></Hello> */}
    
    </div>
  );
}

export default App;
