import { Link } from 'react-router-dom';
import { useState } from "react"

const Register = (props) =>{
    const [info, setInfo]= useState({email:'', password:'', username:'', name: '', bio:'', image:null})

    const handleChange = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    };

    const handleImageChange = (event) => {
      const image = event.target.files[0];
      setInfo({ ...info, image });
      const reader = new FileReader();
      reader.onload = () => {
        document.getElementById('image-preview').src = reader.result;
      };
      reader.readAsDataURL(image);
    };

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("email", info.email);
        formData.append("image", info.image);
        formData.append("password", info.password);
        formData.append("username", info.username);
        formData.append("name", info.name);
        formData.append("bio", info.bio);
        props.submitRegistration(info)
    }

    return(
        <div className='auth-whole'>
          <div className='auth-content'>
            {props.invalidMessage ?
                <p className='error'>Username already exists</p>
                : null
            }
            <form onSubmit={e => handleSubmit(e)}>
                <input className='auth-input' required type="text" name="email" placeholder='Email' onChange={handleChange}/>
                <br/>
                <br/>
                <input className='auth-input' required type="text" name="name" placeholder='First Last Name' onChange={handleChange}/>
                <br/>
                <br/>
                <input className='auth-input' required type="text" name="username" placeholder='Username' onChange={handleChange}/>
                <br/>
                <br/>
                <input className='auth-input' required type="password" name="password" placeholder='Password' onChange={handleChange}/>
                <br/>
                <br/>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <img
                  id="image-preview"
                  src={info.image}
                  alt="Image preview"
                  style={{ maxWidth: "100%" }}
                />
                <br />
                <br />
                <input className='auth-input' required type="text" name="bio" placeholder='Bio' onChange={handleChange}/>
                <br/>
                <br/>
                <input className='auth-submit' type="submit" value="Register"/>
            </form>
            <div className='auth-link'>
                <h4>Already have an account?</h4>
                <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
 
    )
}

export default Register