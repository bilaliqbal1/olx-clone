import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Link } from "react-router-dom";


import Home from "./components/home";
import Header from "./components/header"

function App() {
  return (
    
      <BrowserRouter>
        <Header />
            {/* <Router path="/" component={Home} /> */}
      </BrowserRouter>
    
  );
}

export default App;
