import { Link } from "react-router-dom"


const Profile = (props) =>{
          return (
            <div>
              <Link to='/favorites'>View Favorites</Link>
              <h4>Username: {props.user.username}</h4>
              <h4>Name: {props.user.name}</h4>
              <img src={props.user.image}/>
              <h4>Bio: {props.user.bio}</h4>
            </div>
          )

}

export default Profile