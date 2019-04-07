import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Fib from './Fib';
import OtherPage from './OtherPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div> <Link to="/">Home</Link></div>  
        <div><Link to="/other-page">Other Page</Link></div>  
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/other-page" component={OtherPage} />
        </div>
        </div>
      </Router>

    );
  }
}

export default App;

        //  <img src={logo} className="App-logo" alt="logo" />
        // <header className="App-header">
        // </header>
