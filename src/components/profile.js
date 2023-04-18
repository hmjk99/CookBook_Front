import EditProfile from "./editProfile"
import { useState } from "react";

const Profile = (props) =>{
  const [profileEdit, setProfile] = useState(false)

  const showEditProfile  = () =>{
    setProfile(!profileEdit)
  }

  return (
    <div id='profile-page'>
      <div id='profile' >
      {profileEdit ? 
      <EditProfile user={props.user} getUser={props.getUser} showEditProfile={showEditProfile}/>
      :
      <>
      <h4>Username: {props.user.username}</h4>
      <h4>Name: {props.user.name}</h4>
      <img id='profile-img' src={props.user.image}/>
      <h4>Bio: {props.user.bio}</h4>
      <button id='profile-button' onClick={showEditProfile}>Edit Profile</button>
      </>
      }
      </div>
    </div>


  )

}

export default Profile