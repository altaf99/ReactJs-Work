import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
    {/* to include Greet component into app.js we simply need to create
    coustom html tag */}
    <Greet /> 
      
    </div>
  );
}

export default App;
