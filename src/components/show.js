import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Edit from "./edit";

const Show = (props) => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState('');

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
        getRecipes()
    }, []);

    return (
        <>
        <div>
        <h1>Recipes</h1>
        <div>
            <h4>{recipe.title}</h4>
            <img src={recipe.image}/>
            <h4>Equipment: {recipe.equipment}</h4>
            <h4>Ingredients: {recipe.ingredients}</h4>      
            <h4>Instructions: {recipe.instructions}</h4> 
            <Edit handleUpdate={handleUpdate} recipe={recipe}/>    
        </div>
        <Link to="/">Back to Home</Link>
        </div>
    </>
      );
    };

export default Show;
