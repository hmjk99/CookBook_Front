import { Link } from "react-router-dom";
import { useState } from "react";

const Recipes = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([])

  const handleFavorite = (recipeId) => {
    if (!favorites.includes(recipeId)) {
      setFavorites([...favorites, recipeId])
    } else {
      setFavorites(favorites.filter(id => id !== recipeId))
    }
  }

  return (
    <>
      <div>
        <h1>Recipes</h1>
        <Link to="/add">
          <button>Add New Recipe</button>
        </Link>
        <div>
          <input
            type="search"
            placeholder="search by recipe name..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        {props.recipes
          .filter((recipe) => {
            if (searchTerm === "") {
              return true;
            } else if (
              recipe.title
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return (
                true
              )
            } else {
              return (
                false
              )
            }
          })
          .map((recipe) => {
            return (
              <div>
                <Link to={`/${recipe.id}`}>
                  <h3>By: {props.user.name}</h3>
                  <h4>{recipe.title}</h4>
                  <img src={recipe.image} />
                </Link>
                <button onClick={props.handleDelete} value={recipe.id}>
                  X
                </button>
                <button onClick={ () => handleFavorite(recipe.id)}>
                {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
              </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Recipes;
