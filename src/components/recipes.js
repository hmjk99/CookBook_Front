import { Link } from "react-router-dom";

const Recipes = (props) => {
  return (
    <>
      <div>
        <h1>Recipes</h1>
        <Link to="/add">
          <button>Add New Recipe</button>
        </Link>
        {props.recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <h4>{recipe.title}</h4>
              <img src={recipe.image} />
              <h4>Equipment: {recipe.equipment}</h4>
              <h4>Ingredients: {recipe.ingredients}</h4>
              <h4>Instructions: {recipe.instructions}</h4>
              <Link to={`/${recipe.id}`} element={(recipe = { recipe })}>
                <button>Make it Better!</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Recipes;
