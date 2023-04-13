import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Edit = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(props);
  const handleSubmit = (e) => {
    e.preventDefault();
    // handleEdit(recipe);
    navigate("/");
  };

  return (
    <>
      <h1>Hi</h1>
    </>
  );
};

export default Edit;
