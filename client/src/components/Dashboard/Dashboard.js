import React from "react";
import {useState,createRef,useEffect} from "react";

import "./Dashboard.css";

import user_link from "../img/user_link.png";
import copy from "../img/copy.png";
import links from "../img/links.png";

import Api from "../Api/index.js";

import Loading from "../Loading/Loading";


function Dashboard({setLoading,setMessage,setPopup}) {
   //states
   const [name,setName]=useState("");
   const [url,setUrl]=useState("");
   const [table,setTable]=useState([]);
   const [showinfo,showInfo]=useState(false);
   const [showtable,showTable]=useState(false);
   const [showcopy,showCopy]=useState(false);
   
   const [token,setToken]=useState("");

   const link_ref=createRef();

   const info_style=showinfo?"display:flex":"display:none";
   const table_style=showtable?"display:flex":"display:none";
   const copy_style=showcopy?"display:flex":"display:none";



   useEffect(()=>{
    fetchScammer();
   },[])

   async function fetchScammer(){
        debugger;
        setLoading(true);
        let res=await Api.getScammers();        
        setLoading(false);

        if(res.status==="Sucess"){
          let scammer_length=res.scammers.length;
          if(scammer_length>0){
              showTable(true);  
              insertToTable(res.scammers);
          }
          else if(scammer_length<=0){
           showInfo(true)
          }
        }
        else{
          setPopup(true);
          setMessage(res.error_msg);
        }
   }
   //handler
   async function getLink(e) {
      
      setLoading(true);
      let res=await Api.getLink(name,url);
      setLoading(false);

      if(res.status==="Sucess"){
        setToken(res.token);
        fetchScammer();
      }
      else{
         setPopup(true);
         setMessage(res.error_msg);
      }
      
   }

   function copyToClipBoard() {
      link_ref.current.select();
      link_ref.current.setSelectionRange(0,99999);
      document.execCommand("copy");
      showCopy(true);
      setTimeout(()=>{showCopy(false);},500);
   }

   function insertToTable(scammers){
    let temp=[]
    for(let i=0;i<scammers.length;i++){

        let row=<div className="tr">
                <div className="td">
                <a href={window.location.origin+"/user/scammer/id/"+scammers[i].user_id}>{scammers[i].scammername}</a></div>
                <div className="td">{String(scammers[i].isvisited)}</div>
              </div>
      temp.push(row)
     
    }
    setTable(temp);
  }


return(<>
  <div className="hero">
    <img src={user_link} className="hero-img" />
  </div>

  <div className="dashboard_form">
    <div className="copy_text" Style={copy_style}>copied</div>
    <input type="text" name="scammername" className="scammername" placeholder="Enter the scammer name" required={true} onChange={(e)=>{setName(e.target.value);}} value={name}/>
    <input type="text" name="link" className="img_link" placeholder="Enter any url or image url" onChange={(e)=>{setUrl(e.target.value);}} value={url} />
    <img src={copy} className="copy-img" onClick={copyToClipBoard}/>
    <img src={links} className="link-img" />
    <input type="text" name="link" className="link" placeholder="Link"  value={token} ref={link_ref} />
    <input type="button" name="getlink" className="getlink margin" value="Get Link" onClick={getLink} />
  </div>

  <h1 className="title">Scammer's</h1>
  <h3 className="info_text" Style={info_style}>No Scammer Avalible</h3>

  <div className="table" Style={table_style}>
    <div className="tr table_head">
      <div className="th">Name</div>
      <div className="th">Is Visited</div>
    </div>
   {table}

  </div>
</>);

}

export default Loading(Dashboard);