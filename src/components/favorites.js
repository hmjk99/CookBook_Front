import React, {useState} from 'react'

const Favorites = ({recipes, favorites}) => {
    const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id))

    return(
        <>
        <h1>Favorites</h1>
        <ul>
            {favoriteRecipes.map(recipe => (
                <li>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image}/>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Favorites