import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = (props) => {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState({...props.recipe})

  const handleChange = (event) => {
    setRecipes({ ...recipes, [event.target.name]: event.target.value })
  }

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setRecipes({ ...recipes, image });
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById('image-preview').src = reader.result;
    };
    reader.readAsDataURL(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (recipes.image instanceof File) {
      formData.append("image", recipes.image);
    } else {
      formData.append("imageURL", recipes.image);
    }
    formData.append("title", recipes.title);
    formData.append("instructions", recipes.instructions);
    formData.append("equipment", recipes.equipment);
    formData.append("ingredients", recipes.ingredients);
    props.handleUpdate(recipes.id, formData);
  };

  return (
    <>
     <details>
        <summary>Edit Recipes</summary>
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
          <input
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
      </details>
    </>
  );
};

export default Edit;
