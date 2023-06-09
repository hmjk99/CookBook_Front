import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
    formData.append("user_profile", props.user.id);
    formData.append("title", recipes.title);
    formData.append("image", recipes.image);
    formData.append("instructions", recipes.instructions);
    formData.append("equipment", recipes.equipment);
    formData.append("ingredients", recipes.ingredients);

    props.handleCreate(formData);
    navigate("/");
  };

  return (
    <div id='add'>
      <h3> Add Recipe</h3>
      <form id='add-form' onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <br />
        <input
          className="add-title"
          type="text"
          name="title"
          value={recipes.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="image">Image: </label>
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
        <br />
        <textarea
          type="text"
          name="instructions"
          value={recipes.instructions}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="equipment">Equipment: </label>
        <br />
        <textarea
          type="text"
          name="equipment"
          value={recipes.equipment}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="ingredients">Ingredients: </label>
        <br />
        <textarea
          type="text"
          name="ingredients"
          value={recipes.ingredients}
          onChange={handleChange}
        />
        <br />
        <br />
        <input className='edit-submit' type="submit" />
      </form>
    </div>
  );
};

export default Add;
