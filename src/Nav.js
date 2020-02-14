import React, { useContext } from "react";
import styled from "styled-components";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const { a } = useContext(MovieContext);
  const [movies, setMovies] = a;
  console.log("Render Nav");
  return (
    <NavBar>
      <h3>Movie App</h3>
      <p>Movie Count: {movies.length}</p>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled("div")`
  text-align: center;
  border-style: dashed;
  border-color: white;
  background-color: grey;
  color: white;
`;
