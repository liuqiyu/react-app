import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import MyRouter from '../router/index';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="main">
            <MyRouter></MyRouter>
          </div>
          <Navbar></Navbar>
        </div>
      </Router>
    );
  }
}

export default App;
