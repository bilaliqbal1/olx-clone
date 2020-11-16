import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Router, Link } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        {/* <Router path="/" component={Home}> */}

        {/* </Router> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
