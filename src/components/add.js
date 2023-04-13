import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = (props) => {
  const [recipes, setRecipes] = useState({
    title: "",
    image: null,
    instructions: "",
    equipment: "",
    ingredients: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setRecipes({ ...recipes, [event.target.name]: event.target.value });
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setRecipes({ ...recipes, image });
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("image-preview").src = reader.result;
    };
    reader.readAsDataURL(image);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", recipes.title);
    formData.append("image", recipes.image);
    formData.append("instructions", recipes.instructions);
    formData.append("equipment", recipes.equipment);
    formData.append("ingredients", recipes.ingredients);

    props.handleCreate(formData);
    navigate("/");
  };

  return (
    <>
      <h1> Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={recipes.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="image">image: </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <img
          id="image-preview"
          src={recipes.image}
          alt="Image preview"
          style={{ maxWidth: "100%" }}
        />
        <br />
        <br />
        <label htmlFor="instructions">Instructions: </label>
        <textarea
          type="text"
          name="instructions"
          value={recipes.instructions}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="equipment">Equipment: </label>
        <input
          type="text"
          name="equipment"
          value={recipes.equipment}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="ingredients">Ingredients: </label>
        <input
          type="text"
          name="ingredients"
          value={recipes.ingredients}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Add;
