import React from 'react';
import '../Forms/style3.css';
// import redirect from '../Forms/redirect';
import Resturant from '../Basics/Resturant';
import {useHistory} from "react-router-dom";
const Login = () => {
    const history = useHistory();
  return (
  <>
  <p1>
    <label>Welcome to PetCare</label>
    <label>Login</label>
    </p1> 
    
    <form action="">
        <div>
          <label htmlFor="username">Fullname</label>
          <input type="text" autoComplete ="off" name="username" id="username"/>
        </div>
        <div>
             <label htmlFor="password">Password</label>
             <input type="password" autoComplete ="off" 
             name="password" id="password"/>
         </div>

         <button type="submit" onClick={() =>{history.push("/Resturant")}}>Login</button>
         
    </form>
  </>

  )
};

export default Login;

