import React, {useState} from 'react'

const Favorites = ({recipes, favorites, setFavorites}) => {
    const handleRemoveFavorite = (id) => {
        setFavorites((prevFavorites) => prevFavorites.filter((recipeId) => recipeId !== id))
    }
    const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id))

    return(
        <>
        <h1>Favorites</h1>
        {favorites.length > 0 ? (
            <ul>
                {favoriteRecipes.map((recipeId) => {
                    const recipe = recipes.find((recipe) => recipe.id === recipeId)
                    if (!recipe) {
                        return null
                    }

                    return(
                        <li key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <img src={recipe.image}/>
                            <button onClick={() => handleRemoveFavorite(recipe.id)}>Remove from Favorites</button>
                        </li>
                    )
                })}
            </ul>
        ) : (
            <p>No favorites saved</p>
        )}
        </>
    )
}

export default Favorites