import {Link} from 'react-router-dom'


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
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Recipes;
