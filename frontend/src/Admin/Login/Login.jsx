import React from 'react'
import Logo from "../../Assets/SEPCAM Logo PNG 1.svg"
import "../../index.css"

const Login = () => {
  return (
    <div class='border-2 border-green-600'>
      
      <div>
      <img src={Logo}alt=''/>
      <p>Sigin</p>
      </div>
        
        <form>
          <div>
            <p className='bg-green-600'>Username or email</p>
          <input type='text' placeholder='Input your username'/>
          </div>
          <div>
            <p>Password </p>
          <input type='password'placeholder='Enter Your Password'/>
          </div>
           <div>
           <button className='bg-blue text-white' >Login</button>
           </div>
            

        </form>
        <div>
        <p>Keep Me Logged In</p>
        <p>Forgot password/username</p>
        <p>Don't have an account? Sign up </p>
        </div>
      
    </div>
  )
}

export default Login