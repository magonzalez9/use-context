import React from "react";
import "./App.js";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

function App() {
  return (
    <MovieProvider>
      <Nav />
      <AddMovie />
      <MovieList />
    </MovieProvider>
  );
}

export default App;
