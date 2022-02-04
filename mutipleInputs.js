import React, { useState } from 'react';
import '../Forms/style3.css';
import Login from './Login';
import {useHistory} from "react-router-dom";
const MutipleInputs = () => {

   const [userRegisteration, setUserRegisteration] = useState({
       username: "",
       email: "",
       mobile: "",
       password: ""
   });
   
   const [records, setRecords] = useState([]);
  
  
   const handleInput = (e) => {
      const name= e.target.name;
      const value= e.target.value;
      console.log(name,value);

      setUserRegisteration({...userRegisteration, [name] : value});
  } 

  const handleSubmit = (e) => {
     e.preventDefault();
     console.log(records);
     const newRecord = {...userRegisteration, id: new Date().getTime.toString()}
     setRecords([...records, newRecord]);
    //  console.log(records);

    setUserRegisteration ({ username:"",email:"",mobile:"",password:""});
  
    }
    const history = useHistory();
  return (
  <> 
    <p1>
    <label>Welcome to PetCare</label>
    </p1>  
       

     <form action="" onSubmit={handleSubmit}>
         <div>
             <label htmlFor="username">Fullname</label>
             <input type="text" autoComplete ="off" 
             value={userRegisteration.username}
             onChange={handleInput}
             name="username" id="username"/>
         </div>
         <div>
             <label htmlFor="email">email</label>
             <input type="text" autoComplete ="off" 
             value={userRegisteration.email}
             onChange={handleInput}
             name="email" id="email"/>
         </div>
         <div>
             <label htmlFor="mobile">Mobile</label>
             <input type="text" autoComplete ="off" 
             value={userRegisteration.mobile}
             onChange={handleInput}
             name="mobile" id="mobile"/>
         </div>
         <div>
             <label htmlFor="password">Password</label>
             <input type="password" autoComplete ="off" 
             value={userRegisteration.password}
             onChange={handleInput}
             name="password" id="password"/>
         </div>

         <button type="submit" >Register</button>
         
     </form>
     <button onClick={() =>{history.push("/Login")}}>Login Page</button>

     <div>
         {
             records.map((curElem) =>{
                 const {id, username, email,mobile,password} = curElem;
                 return (
                     <div className="showDataStyle" key={curElem.id} >
                         <p>{username}</p>
                         <p>{email}</p>
                         <p>{mobile}</p>
                         <p>{password}</p>
                         
                      </div>
                      
                     
                 )
             })
         }
     </div>
  </>
  );
};

export default MutipleInputs;
