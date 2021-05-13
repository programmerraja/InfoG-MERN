import React from "react";
import {useEffect,useState} from "react";

import Api from "../Api/index.js";

import image2 from "../img/image2.svg";

import "./Token.css";


function Token(props){
  const [redirect,setRedirect]=useState(false);

  async function storeDetail(){
    let res= await Api.storeDetail(props.match.params.id);
    console.log(res)
    if(res.redirect){
      setRedirect(res.redirect);
      window.location=res.redirect;
    }
  }

  useEffect(()=>{
     storeDetail();
  },[]);

  if(redirect){
    return null
  }
  else{
    return ( <div class="error_container">  
            <img src={image2} Style="height:100vh;width: 100vw; position:absolute" />
      </div>);
  }
  
}

export default Token;
