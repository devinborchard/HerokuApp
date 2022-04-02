import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers';
import Home from './components/Home';
import { BrowserRouter,Route, Link, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = 'customers' element = {<Customers/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
