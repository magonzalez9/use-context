import React, { useState, useContext } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const { a } = useContext(MovieContext);
  const [movies, setMovies] = a;
  console.log("Render Movie List");
  return (
    <List>
      {movies.map((movie, index) => (
        <Movie name={movie.name} price={movie.price} key={index} />
      ))}
    </List>
  );
};

export default MovieList;

const List = styled("div")`
  text-align: center;
`;
