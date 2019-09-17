import React, { useState } from 'react';

export const MovieContext = React.createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { name: 'Harry Potter', price: '$10', id: 23134 },
    { name: 'Game of Thrones', price: '$10', id: 2566124 },
    { name: 'Inception', price: '$10', id: 23524 }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}