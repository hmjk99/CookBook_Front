import {Link} from 'react-router-dom'

const Starter = () =>{

    return (
        <>
        <img id='main-img' src='https://cdn.vox-cdn.com/thumbor/7-7QKKFpvC3-HEuS-HZ3yOZLC0g=/0x0:6000x4000/1720x0/filters:focal(0x0:6000x4000):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23957271/Anju.jpg'/>
        <div id="starter-home">
            <div id='title'>
                <h1>Welcome to </h1>
                <h1>CookBook!</h1>
            </div>
            <div id='starter-link'>
                <Link to='/login'><button className='login starter-link'>Login</button></Link>
                <Link to='/register'><button className='register starter-link'>Register</button></Link>
            </div>
        </div>
        </>
    )
}

export default Starter