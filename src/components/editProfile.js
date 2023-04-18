import { useState, useEffect } from "react";
import axios from "axios";

const EditProfile = (props) => {
  const [users, setUsers] = useState({...props.getUsers});

  useEffect(() => {
    setUsers(props.user);
  }, [props.user]);

  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value });
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setUsers({ ...users, image });
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("image-preview").src = reader.result;
    };
    reader.readAsDataURL(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (users.image instanceof File) {
      formData.append("image", users.image);
    } else {
      formData.append("imageURL", users.image);
    }
    formData.append("password", users.password);
    formData.append("name", users.name);
    formData.append("username", users.username);
    formData.append("bio", users.bio);
    handleUpdate(users.id, formData);
    props.showEditProfile();
  };

  const handleUpdate = (id, editUser) => {
    axios
      .put("http://localhost:8000/api/user/" + id, editUser, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        props.getUser();
      });
  };


  return (
    <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Name: </label>
          <br />
          <input
            className="add-title"
            type="text"
            name="name"
            value={users.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          <img
            id="image-preview"
            src={users.image}
            alt="Image preview"
            style={{ maxWidth: "100%" }}
          />
          <br />
          <br />
          <label htmlFor="instructions">Username: </label>
          <br />
          <input
            className="add-title"
            type="text"
            name="username"
            value={users.username}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="equipment">Bio: </label>
          <br />
          <input
            className="add-title"
            type="text"
            name="bio"
            value={users.bio}
            onChange={handleChange}
          />
          <br />
          <br />
          <input className="edit-submit" type="submit" />
        </form>
    </>
  );
};

export default EditProfile;
