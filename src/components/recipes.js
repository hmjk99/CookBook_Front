import {Link} from 'react-router-dom'
import Edit from './edit';


const Recipes = (props) => {
  return (
    <>
      <div>
        <h1>Recipes</h1>
        <Link to='/add'><button>Add New Recipe</button></Link>
        {props.recipes.map((recipe) => {
          return (
            <div>
              <h4>{recipe.title}</h4>
              <img src={recipe.image}/>
              <h4>Equipment: {recipe.equipment}</h4>
              <h4>Ingredients: {recipe.ingredients}</h4>      
              <h4>Instructions: {recipe.instructions}</h4>
              <Edit handleUpdate={props.handleUpdate} recipe={recipe}/>
              <button onClick={props.handleDelete} value={recipe.id}>X</button>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Recipes;
