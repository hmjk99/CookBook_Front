import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Recipes from "./components/recipes";
import Add from "./components/add";
import Show from "./components/show";


function App() {
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);

  // need the url from back end
  const getRecipes = () => {
    axios.get("http://localhost:8000/api/recipes").then(
      (response) => setRecipes(response.data),
      (err) => console.log(err)
    );
  };

  const getUsers = () => {
    axios.get("http://localhost:8000/api/userprofiles").then(
      (response) => setUsers(response.data),
      (err) => console.log(err)
    );
  };

  const handleCreate = (addRecipes) => {
    axios
    .post("http://localhost:8000/api/recipes", addRecipes, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
      getRecipes();
    });
  }
  


  const handleDelete = (deletedRecipes) => {
    axios
      .delete("http://localhost:8000/api/recipes/" + deletedRecipes.target.value)
      .then((response) => {
        getRecipes();
      });
  };

  useEffect(() => {
    getRecipes()
    getUsers()
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Recipes recipes={recipes} handleDelete={handleDelete} />}
      />
      <Route path="/add" element={<Add handleCreate={handleCreate} />} />
      <Route
        path="/:id"
        element={<Show/>}
      />
    </Routes>
  );
}

export default App;
