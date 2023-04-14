import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Edit = (props) => {
  const [recipe, setRecipe] = useState({...props.recipe})

  // const { id } = useParams();
  const navigate = useNavigate();

  // console.log(props);


  const handleChange = (event) => {
    setRecipe({...recipe, [event.target.name]: event.target.value})
  }

  const handleImageChange = (event) => {
    const image = event.target.files[0]
    setRecipe({...recipe, image})
    const reader = new FileReader()
    reader.onload = () => {
      document.getElementById('image-preview').src = reader.result
    }
    reader.readAsDataURL(image)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData()
    if (recipe.image instanceof File) {
      formData.append('image', recipe.image)
    } else {
      formData.append('imageURL', recipe.image)
    }
    formData.append('title', recipe.title)
    formData.append('image', recipe.image)
    formData.append('instructions', recipe.instructions)
    formData.append('equipment', recipe.equipment)
    formData.append('ingredients', recipe.ingredients)

    props.handleUpdate(recipe.id, formData);
    console.log(recipe);
    navigate("/");
  };

  return(
    <>
    <details>
      <summary>Edit Recipe</summary>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title: </label>
        <input 
          type='text'
          name='title'
          value={recipe.title}
          onChange={handleChange}
        />
        <br/>
        <br/>
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
          src={recipe.image}
          alt="Image preview"
          style={{ maxWidth: "100%" }}
        />
        <br />
        <br />
        <label htmlFor="equipment">Equipment: </label>
        <input
          type="text"
          name="equipment"
          value={recipe.equipment}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="instructions">Instructions: </label>
        <input
          type="text"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="ingredients">Ingredients: </label>
        <input
          type="text"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Save" />
      </form>
    </details>
    </>
  )
  }

export default Edit
