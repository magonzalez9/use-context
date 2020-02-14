import React, { useState, useContext } from "react";
import styled from "styled-components";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [formState, setFormState] = useState({
    name: "",
    price: ""
  });

  const { a } = useContext(MovieContext);
  const [movies, setMovies] = a;

  function handleSubmit(e) {
    e.preventDefault();

    const { name, price } = formState;
    setMovies([...movies, { name: name, price: price }]);
  }

  function updateInput(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  const { name, price } = formState;
  console.log("Render Add Movie");
  return (
    <FormContainer>
      <label>Name: </label>
      <input name="name" onChange={updateInput} value={name} />
      <label>Price:</label>
      <input name="price" onChange={updateInput} value={price} />
      <button onClick={handleSubmit}>Add</button>
    </FormContainer>
  );
};

export default AddMovie;

const FormContainer = styled("form")`
  text-align: center;
`;
