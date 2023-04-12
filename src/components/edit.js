import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentRecipe, setRecipe] = useState({ ...props.recipe });
  console.log(currentRecipe);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleUpdate(currentRecipe);
    navigate("/");
  };

  const handleChange = (e) => {
    setRecipe({ ...currentRecipe, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <h3>Make it better!</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={currentRecipe.title}
            onChange={handleChange}
          />
          <br />
        </form>
      </div>
    </>
  );
};

export default Edit;
