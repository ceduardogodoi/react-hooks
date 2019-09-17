import React from 'react';
import './App.css';

import MoviesList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie';

import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
