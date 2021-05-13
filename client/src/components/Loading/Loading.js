import React from "react";
import {useState} from "react";
import { useHistory } from "react-router-dom";

import "./Loading.css";

function Loading(Childcomponent) {
  function Hocloading(props){
        
      const [loading,setLoading]=useState(false);
      const [msg,setMessage]=useState("");
      const [showpopup,setPopup]=useState(false);
      const history = useHistory();
      
      let loading_style=loading?"display:flex":"display:none";
      let popup_style=showpopup?"display:flex":"display:none";

      function closePopup(){
        if(showpopup==="goback"){
           history.goBack();  
        }
        setPopup(false);
      }
      return ( 
        <>
             <div className="loading_container" Style={loading_style}>
                <div className="dot1 dot">
                </div>
                <div className="dot2 dot">
                </div>
                <div className="dot3 dot">
                </div>
             </div>
             <div className="popup_container" Style={popup_style}>
                <div className="popup_card">
                <p className="popup_text">
                  {msg}
                </p>
                <input type="button" name="popup_button" className="popup_button" value="OK" onClick={closePopup}/>
                </div>
          </div>
          
            <Childcomponent {...props} setLoading={setLoading} setMessage={setMessage} setPopup={setPopup}/>
        </>
          );
  }
  return Hocloading;

}

                
export default Loading;