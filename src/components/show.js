import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Edit from "./edit";

const Show = (props) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState("");
  const [displayEdit, setEdit] = useState(false)


  const showEdit = () =>{
    setEdit(!displayEdit)
  }

  const getRecipes = () => {
    axios.get(`http://localhost:8000/api/recipes/${id}`).then(
      (response) => setRecipe(response.data),
      (err) => console.log(err)
    );
  };

  const handleUpdate = (id, editRecipe) => {
    axios
      .put("http://localhost:8000/api/recipes/" + id, editRecipe, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        getRecipes();
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div id='show'>
      <div className='show-top'>
        <h2>{recipe.title}</h2>
      </div>
      {displayEdit ?
        <>
          <Edit handleUpdate={handleUpdate} recipe={recipe} showEdit={showEdit}/>
        </>
        :
        <>
          <img className='show-image' src={recipe.image} />
          <button id='edit' onClick={showEdit}>Edit</button>
          <div className="recipes-info">
            <h3>Equipment:</h3>
            <p>{recipe.equipment}</p>
          </div>
          <div className="recipes-info">
            <h3>Ingredients:</h3>
            <p>{recipe.ingredients}</p>
          </div>
          <div className="recipes-info">
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
          </div>
        </>
      }
    </div>
  );
};

export default Show;
