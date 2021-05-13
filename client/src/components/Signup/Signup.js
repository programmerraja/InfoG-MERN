import React from "react";
import {useState} from "react";

import Loading from "../Loading/Loading";
import Auth from "../Auth/index.js";
import user from "../img/user.png";

function Signup({setLoading}) {
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [msg,setMsg]=useState("");
   const [password,setPassword]=useState("");
   
   async function HandleForm(){
     setLoading(true);
     let res=await Auth.signUp(name,email,password);
     debugger;                                                
     setLoading(false);
     if(res.status==="Sucess"){
      setMsg(res.msg);
    }
    else{
      setMsg(res.error_msg);
    }

  }

return ( <>
    <div class="user">
       <img src={ user } class="user-img" />
    </div>

    <div class="signup_container">
        <div class="form_container">
            <div class="form_input">
            <label for="name"> Name </label>
            <input type="text" name="name" required="true" onChange={(e)=>{setName(e.target.value);}} value={name}/>
            </div>

            <div class="form_input">
            <label for="email"> Email </label>
            <input name="email" required="" type="email" onChange={(e)=>{setEmail(e.target.value);}} value={email} />
            </div>

            <div class="form_input">
            <label for="password"> Password </label>
            <input type="password" name="password" required="true"onChange={(e)=>{setPassword(e.target.value);}} value={password} />
            </div>


            <div class="form_button">
            <input type="submit" name="login" value="Sign Up" class="signup" onClick={HandleForm}/>
            </div>

            <div class="error_msg">
            {msg}
            <span>
            </span>
            </div>

        </div>
    </div>
    </>);

}
export default Loading(Signup);