import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(recipe);
    navigate("/");
  };

  return <></>;
};

export default Edit;
