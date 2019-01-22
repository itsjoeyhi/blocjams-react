import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing.js';
import Library from './components/Library.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <nav>
           </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
        <Route exact path="/" component={Landing} />
           <Route path="/Library" component={Library} />
        </main>
      </div>
    );
  }
}

export default App;