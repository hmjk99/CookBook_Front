import { Link } from "react-router-dom";
import { useState } from "react";

const Recipes = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
      <div id='home'>
        <h3>Recipes</h3>
        <div>
          <input
            id="search"
            type="search"
            placeholder="search by recipe name..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <Link to="/add">
          <button id='add-button'>Add New Recipe</button>
        </Link>
        <div id='home-recipes'>
        {props.recipes
          .filter((recipe) => {
            if (searchTerm == "") {
              return recipe;
            } else if (
              recipe.title
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return (
                <Link to={`/${recipe.id}`}>
                  <h4>{recipe.title}</h4>
                  <img src={recipe.image} />
                </Link>
              );
            }
          })
          .map((recipe) => {
            return (
              <div className="recipe">
                  <div className="recipe-top">
                    <h4>{recipe.title}</h4>
                    <button id='delete-button' onClick={props.handleDelete} value={recipe.id}>
                      X
                    </button>
                  </div>
                <Link to={`/${recipe.id}`}>
                  <img className='rec-image' src={recipe.image} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default Recipes;
