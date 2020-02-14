import React, { useState, createContext } from "react";

/*
Context API is good for rendering out information e.g. importing data and rendering it out.
The downside is that if you want to change something in the context, all the components that
user the context API will have to re-render. 
*/

// Initiate Context
export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 231412
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 261326
    },
    {
      name: "Pokemon",
      price: "$100",
      id: 12354
    }
  ]);
  const [genres, setGenres] = useState(["comedy", "scifi", "drama"]);

  return (
    // MovieContext.Provider provides info to the children components
    <MovieContext.Provider
      value={{ a: [movies, setMovies], b: [genres, setGenres] }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
