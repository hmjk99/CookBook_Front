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
            <div>
              <Link to={`/${recipe.id}`}>
                <h4>{recipe.title}</h4>
                <img src={recipe.image} />
              </Link>
              <button onClick={props.handleDelete} value={recipe.id}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Recipes;
