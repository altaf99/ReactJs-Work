import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
function App() {
  return (
    <div className="App">
    {/* to include Greet component into app.js we simply need to create
    coustom html tag */}
    <Greet /> 
    <Welcome />
    </div>
  );
}

export default App;
