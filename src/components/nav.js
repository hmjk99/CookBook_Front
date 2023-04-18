import {Link} from 'react-router-dom'

const Nav = (props) =>{
    if (props.currentUser){
        return(
            <>
            <div id='header'>
                <img id='nav-img' src='https://cdn.vox-cdn.com/thumbor/7-7QKKFpvC3-HEuS-HZ3yOZLC0g=/0x0:6000x4000/1720x0/filters:focal(0x0:6000x4000):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23957271/Anju.jpg'/>
                <h1>CookBook!</h1>
            </div>
            <div id="nav">
                <Link to='/'><h4>Home</h4></Link>
                <Link to='#'><h4>Favorites</h4></Link>
                <Link to='/profile'><h4>Profile</h4></Link>
                <h4 id='logout' onClick={e => props.submitLogout(e)}>Logout</h4>
            </div>            
            </>

        )
    }
}

export default Nav