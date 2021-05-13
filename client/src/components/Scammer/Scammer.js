import React from "react";
import {useEffect,useState} from "react";

import "./Scammer.css";
import Api from "../Api/index.js";

import Loading from "../Loading/Loading";


function Scammer ({match,setMessage,setPopup,setLoading}){
  const [scammer,setScammer]=useState(false);
  const [msg,setMsg]=useState(false);
  
  async function getScammer(){
    let res=await Api.getScammer(match.params.id); 
    if(res.status==="Sucess"){
      setScammer(res.scammer);
    }
    else{
      setPopup(true);
      setMessage(res.error_msg);
    }
  }

  async function removeScammer(){
    setLoading(true);
    let res=await Api.removeScammer(scammer._id);
    setLoading(false);
    setPopup("goback");
    setMessage(res.error_msg);  

  }
  
  useEffect(()=>{
    getScammer();

  },[])

  return ( <>
      <h3 className="title"> Scammer Information </h3>
      <div className="scammer_container">
      <div className="left">
      <div className="scammer_data">
      <div className="data_left">
      <p className="bold_text"> Name: </p>
      </div>
      <div className="data_right">
      <p>
        {scammer.name}
      </p>
      </div>
      </div>

      <div className="scammer_data">
      <div className="data_left">
      <p className="bold_text"> Ip: </p>
      </div>

      <div className="data_right">
      <p>
        {scammer.ip}
      </p>
      </div>

      </div>

      <div className="scammer_data">
      <div className="data_left">
      <p className="bold_text"> City: </p>
      </div>
      <div className="data_right">
      <p>
        {scammer.city}
      </p>
      </div>
      </div>

      <div className="scammer_data">

      <div className="data_left">
      <p className="bold_text"> Region: </p>
      </div>
      <div className="data_right">
      <p>
        {scammer.region}

      </p>
      </div>
      </div>

      <div className="scammer_data">
      <div className="data_left">
      <p className="bold_text"> Country: </p>
      </div>
      <div className="data_right">
      <p>
        {scammer.country}

      </p>
      </div>
      </div>
      <div className="scammer_data">
      <div className="data_left">
      <p className="bold_text"> Organisation: </p>
      </div>
      <div className="data_right">
      <p>
        {scammer.org}
      
      </p>

      </div>
      </div>
      <div className="scammer_data">
      <div className="data_left">
      <p className="bold_text"> Visited Date: </p>
      </div>

      <div className="data_right">
      <p>
        {scammer.visited_date}

      </p>
      </div>
      </div>
      </div>

      <div className="right">
      <div className="scammer_data">
      <div className="data_left">
      <p className="bold_text"> Vendor: </p>
      </div>

      <div className="data_right">
      <p>
        {scammer.vendor}

      </p>
      </div>
      </div>

      <div className="scammer_data">
      <div className="data_left">
      <p className="bold_text"> Model: </p>
      </div>

      <div className="data_right">
      <p>
        {scammer.model}

      </p>
      </div>
      </div>

      <div className="scammer_data">
      <div className="data_left">
      <p className="bold_text"> Type: </p>
      </div>

      <div className="data_right">
      <p>
        {scammer.type}

      </p>
      </div>
      </div>

      <div className="scammer_data">
      <div className="data_left">
      <p className="bold_text"> Browser: </p>
      </div>
      <div className="data_right">
      <p>
      {scammer.browser}
      </p>
      </div>
      </div>
      <div className="scammer_data">
      <div className="data_left">
      <p className="bold_text"> Os: </p>
      </div>
      <div className="data_right">
      <p>
      {scammer.os}
      </p>

      </div>
      </div>
      <div className="scammer_data">
      <div className="data_left">
      <p className="bold_text"> Link: </p>
      </div>
      <div className="data_right">
      <p>
      <a href={"/token/"+scammer.token}> Link </a>
      </p>
      </div>
      </div>
      </div>
      </div>
      <div className="remove_container">
      <input type="button" name="remove" className="remove_button" value="Remove Scammer" onClick={removeScammer}/>
      </div>
</>
);

}

export default Loading(Scammer);