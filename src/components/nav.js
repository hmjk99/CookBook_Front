import {Link} from 'react-router-dom'

const Nav = (props) =>{
    if (props.currentUser){
        return(
            <div id="nav">
                <Link to='/'>Home</Link>
                <h4>Favorites</h4>
                <Link to='/profile'>Profile</Link>
                <p onClick={e => props.submitLogout(e)}>Logout</p>
            </div>
        )
    }else{
        return (
            <div id="auth-page">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/register'><button>Register</button></Link>
            </div>
        )
    }
}

export default Nav