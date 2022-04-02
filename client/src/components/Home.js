import React, { Component } from 'react';
import './customers.css';
import { BrowserRouter,Route, Link, Routes } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      //customers: []
    };
  }

  /*
  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }*/

  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to ="customers">Customers</Link>
      </div>
    );
  }
}

export default Home;
