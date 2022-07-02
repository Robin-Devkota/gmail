import { Button } from '@mui/material'
import React from 'react'
import { login } from './features/userSlice'
import { auth,provider } from './firebase'
import './Login.css'
import { useDispatch } from 'react-redux'
function Login() {
    const dispatch=useDispatch();
    const signIn=()=>{
       auth.signInWithPopup(provider)
       .then(({user})=>{
       dispatch(login({
           displayName:user.displayName,  //goole provide login stuf
           email:user.email,
              photoUrl:user.photoURL
        
        
        
       }))})
       .catch(error=>alert(error.message));
    };
  return (
    <div className='login'>
 <div className="login__container">
<img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="" />
 
 
 <Button onClick={signIn} variant="contained"color="primary">Login</Button>
 </div>
 </div>
 
    )
}

export default Login