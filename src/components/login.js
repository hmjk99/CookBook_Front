import { Link } from 'react-router-dom';
import { useState } from "react"

const Login = (props) =>{

    const [info, setInfo]= useState({email:'', password:''})

    const handleChange = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    };

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.submitLogin(info)
    }
    return(
        <div className='auth-whole'>
          <div className='auth-content'>
            {props.invalidMessage ?
                <p className='error'>Invalid Username or Password</p>
            : null
            }   
            <form onSubmit={e => handleSubmit(e)}>
                <input className='auth-input' required type="text" name="email" placeholder='Email'onChange={handleChange}/>
                <br/>
                <br/>
                <input className='auth-input' required type="password" name="password" placeholder='Password' onChange={handleChange}/>
                <br/>
                <br/>
                <input className='auth-submit' type="submit" value="Login"/>
            </form>    
            <div className='auth-link'>
                <h4>Don't have an account?</h4>
                <Link to="/register">Register</Link>
            </div>
          </div>
        </div>

    )
}

export default Login