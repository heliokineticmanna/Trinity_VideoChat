import React from 'react'
import './Home.css'
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import { signInWithGoogle } from "./firebasehelp";


const Home = () => {
  return (
  
    <div className='Maincontainer'>
    <table>
    <tr><td><h1>TRINITY</h1></td></tr>
      <tr><td>
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("WELCOME TO TRINITY!!")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("A VIDEO CONFERENCING PLATFORM.")
       .start();
       }}
       />
      </td></tr>
      <tr><td><br></br></td></tr>
      <tr><td><form className='form'>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1"><strong>Email address</strong></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" important/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1"><strong>Password</strong></label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" important/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1"><strong>Remember Me</strong></label>
  </div>
  <Link to="/Call"><button type="submit" className="btn btn-primary">Log in</button></Link>
  <div className="App">
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign Up with Google
      </button>
    </div>
</form></td></tr>
    
    
    

    </table>
    </div>
  
  )
}

export default Home;
