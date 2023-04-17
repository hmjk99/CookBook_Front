

const Profile = (props) =>{
          return (
            <div>
              <h4>Username: {props.user.username}</h4>
              <h4>Name: {props.user.name}</h4>
              <img src={props.user.image}/>
              <h4>Bio: {props.user.bio}</h4>
            </div>
          )

}

export default Profile