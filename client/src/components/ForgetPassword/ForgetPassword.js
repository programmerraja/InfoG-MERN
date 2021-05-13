import React from "react";
import "./SecondForm.css";
import {useState} from "react";

import Api from "../Api/index.js";

import forget from "../img/forget.svg";
import Loading from "../Loading/Loading";


function ForgetPassword({setLoading}){
  let [email,setEmail]=useState("");
  let [msg,setMsg]=useState("");

  async function sendForgetPassword(){
 
    setLoading(true);
    if(email){   
        let res=await Api.sendForgetPassword(email);
        setMsg(res.msg);
    }
    else{
        setMsg("Please Enter The Email");
    }
    setLoading(false);
   
  }
    
return ( 
    <div class="forget_container">
    <div class="forget_img">
    <img src={ forget } />
    </div>

    <div class="forget_text">
    <h2> Forgot Password ? </h2>
    <p> Enter the email address associated with your account.We will send link to reset the password </p>
    <input type="email" name="email" placeholder="Email Address" class="forget_email"  onChange={(e)=>{setEmail(e.target.value);}}  value={email} />
    <input type="button" name="send_link" class="send_link" value="Send Link"  onClick={sendForgetPassword}/>
    </div>

    <div>
    <p class="forget_error">
    {msg}
    </p>
    </div>
    </div>
);

}
export default Loading(ForgetPassword);