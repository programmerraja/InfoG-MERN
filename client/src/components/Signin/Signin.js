import React from "react";
import "./Signin.css";

import {useState} from "react";

import user from "../img/user.png";
import Auth from "../Auth/index.js";

import Loading from "../Loading/Loading";



function Signin({setLoading}){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");

  async  function HandleForm(){
    
    setLoading(true);
    let res= await Auth.signIn(email,password);
    setLoading(false);
  
    if(res.status==="Sucess"){
       window.location="/user/dashboard";
    }else{
      setError(res.error_msg);
    }
  };

  return ( 
    <>
    <div className="user">
      <img src={ user } className="user-img" />
    </div>
    <div className="signin_container">
      <div className="form_container">

          <div className="form_input">
            <label for="name"> Email </label>
            <input type="email" name="email" required="true" onChange={(e)=>{setEmail(e.target.value);}} value={email}/>
          </div>

          <div className="form_input">
            <label for="password"> Password </label>
            <input type="password" name="password" required="true" onChange={(e)=>{setPassword(e.target.value);}}value={password} />
          </div>

          <div className="form_button">
             <input type="submit" name="signin" value="SIgn In" className="signin_button" onClick={HandleForm}  />
          </div>

          <div className="error_msg">
              <span>
              {error}
              </span>
          </div>

          <div className="form_text">
              <small>
              <a href="/user/forget/password"> Forget password ? </a></small>
              <small> New to InfoG ? <a href="/signup"> Create an account </a></small>
          </div>
   
      </div>
    </div>
    </>);

  }

export default Loading(Signin);
