import React from 'react';
import logo from './logo.svg';
import './App.css';

function Number1(props) {
  return <h1>10 people have died</h1>;
}

function Number2(props) {
  return <h1>20 people have almost died</h1>;
}

function Number3(props) {
  return <h1>30 people have nearly died</h1>;
}

function Number4(props) {
  return <h1>40 people are normal</h1>;
}


function App() {
  return (
    
    <div className="App">
      <Number1/>
      <Number2/>
      <Number3/>
      <Number4/>
    </div>
  );
}

export default App;
