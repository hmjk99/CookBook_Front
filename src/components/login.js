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
            <div className='title'>
                <h1>Welcome Back!</h1>
                <h4>Plan, share, and enjoy home-cooked meals.</h4>
            </div>
            <div className='auth-content'>
            {props.invalidMessage ?
                <p className='error'>Invalid Username or Password</p>
            : null
            }   
            <h3>Login</h3>
            <form onSubmit={e => handleSubmit(e)}>
                <input className='auth-input' required type="text" name="email" placeholder='Email'onChange={handleChange}/>
                <br/>
                <br/>
                <input className='auth-input' required type="password" name="password" placeholder='Password (minimum 8 characters)' onChange={handleChange}/>
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