import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing.js';
import Library from './components/Library.js';
import album from './components/album.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <nav>
        <Link to='/'>Landing</Link>
             <Link to='/library'>Library</Link>
           </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
        <Route exact path="/" component={Landing} />
           <Route path="/Library" component={Library} />
           <Route path="/album" component={album} />
        </main>
      </div>
    );
  }
}

export default App;