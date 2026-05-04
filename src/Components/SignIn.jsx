import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignIn = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
   
    try{

      const data=new FormData()
      data.append("username",username)
      data.append("password",password)
      
      const response=await axios.post('http://isaacndirangu.alwaysdata/signin',data 
      );

      //save token from backend response
      //token proves user is authenticated

      localStorage.setItem("token",response.data.token);

      setIsLoggedIn(true);
    } catch(err){


      setError("Invalid email or password");

    }
    finally{

      setLoading(false) 
    }};




    


  return (

    
    <div className='login-container'>
      <div className='login-box'>
      
      <h1>EventHub Login</h1>
      <p>Login to view Nairobi events</p>
      {error && <p className='error'>{error}</p>}

      <form onSubmit={handleLogin}>


        <input type="text" placeholder="Enter Username" className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />


        <input type="password" placeholder="Enter Password"  className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />



        <button type="submit" className='form-control drip-btn' disabled={loading}>{loading ? "Logging in..." : "Login"} </button>    
        {/* shows dynamic button text */}

        <b><p>Don't have an account<Link to="/signup">Sign up</Link></p></b>
      </form>

      </div>
    </div>




  ) 

};

export default SignIn