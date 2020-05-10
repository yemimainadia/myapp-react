import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/header/header';
import Body from './layout/body/body';

function App() {
  return (

    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
