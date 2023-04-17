import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Recipes from "./components/recipes";
import Add from "./components/add";
import Show from "./components/show";
import Register from './components/register'
import Login from './components/login'
import Nav from './components/nav'
import Profile from './components/profile'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;


const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [invalidMessage, setInvalid] = useState(false);

  const navigate = useNavigate();

  const getRecipes = () => {
    axios.get("http://localhost:8000/api/recipes").then(
      (response) => setRecipes(response.data),
      (err) => console.log(err)
    );
  };

  const getUsers = () => {
    axios.get("http://localhost:8000/api/user")
      .then((response) => {
        setCurrentUser(true);
        setUser(response.data[0]);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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

  const submitLogin = (data) => {
    console.log('submit');
    axios.post(
      "http://localhost:8000/api/login", data
    ).then((response)=> {
      setCurrentUser(true);
      navigate('/')
    })
    .catch((error) => {
      console.log(error);
      setInvalid(true);
    });
  }

  const submitRegistration = (data) => {
    axios.post(
      "http://localhost:8000/api/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ).then((res)=>{
      navigate('/login')
    })
    .catch((error) => {
      console.log(error);
      setInvalid(true);
    });
  }

  const submitLogout = (e) => {
    e.preventDefault();
    axios.post(
      "http://localhost:8000/api/logout",
      {withCredentials: true}
    ).then(function(res) {
      navigate('/login')
      setCurrentUser(false);
    });
  }


  useEffect(() => {
    getRecipes()
    getUsers()
  }, []);

  return (
    <>
    <Nav currentUser={currentUser} submitLogout={submitLogout}/>
    <Routes>
      {currentUser ?
      <>
       <Route path="/" element={<Recipes recipes={recipes} handleDelete={handleDelete} />}
      />
      <Route path="/add" element={<Add handleCreate={handleCreate} user={user}/>} />
      <Route path="/:id" element={<Show/>}/>
      <Route path="/profile" element={<Profile user={user}/>}/>
      </>
      :
      <>
      <Route path="/register" element={<Register submitRegistration={submitRegistration} invalidMessage={invalidMessage}/>}/>
      <Route path="/login" element={<Login submitLogin={submitLogin} invalidMessage={invalidMessage}/>}  />
      </>
      }
    </Routes>
    </>
  
  );
}

export default App;
