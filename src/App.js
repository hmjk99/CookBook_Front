import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Recipes from "./components/recipes";
import Add from "./components/add";
import Edit from "./components/edit";

function App() {
  const [recipes, setRecipes] = useState([]);

  // need the url from back end
  const getRecipes = () => {
    axios.get("http://localhost:8000/api/").then(
      (response) => setRecipes(response.data),
      (err) => console.log(err)
    );
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const handleCreate = (addRecipe) => {
    axios.post("http://localhost:8000/api/", arrRecipe).then((response) => {
      console.log(response);
      getRecipes();
    });
  };

  const handleUpdate = (editRecipe) => {
    console.log(editRecipe);
    axios
      .put("http://localhost:8000/api/" + editRecipe.id, editRecipe)
      .then((response) => {
        getRecipes();
      });
  };

  const handleDelete = (e) => {
    axios
      .delete("http://localhost:8000/api/" + e.target.value)
      .then((response) => {
        getRecipes();
      });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Recipes recipes={recipes} handleDelete={handleDelete} />}
        />
        <Route path="/add" element={<Add handleCreate={handleCreate} />} />
        <Route
          path="/edit/:id"
          element={<Edit recipes={recipes} handleEdit={handleEdit} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
