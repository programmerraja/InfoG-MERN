import {createRef} from "react";
import React from "react";

import "./Nav.css";

import logo from "../img/logo.png";
import user from "../img/user.svg";

import Auth from "../Auth";

function Nav() {

  const nav_ref=createRef();
  const crosslines_ref=createRef();
  const line_ref=createRef();


  function toggle() {
    nav_ref.current.classList.toggle("nav_list_show");
    crosslines_ref.current.classList.toggle("crosslines_show");
    line_ref.current.classList.toggle("lines_hide");
  }

  let nav_link;

  if(Auth.loggedIn==="true"){
    nav_link=(<><div className="nav_link">
                    <a href="/"> Home </a>
                </div>
                
                <div className="nav_link">
                    <a href="/user/dashboard"> Dashboard </a>
                </div>
                <div className="nav_link">
                     <a href="/user/logout"> Logout </a>
                </div>
                <div className="nav_link">
                  <a href="/user/profile">
                  <img src={ user } className="user_img"/>
                  </a>
                </div>
                </>);
  }
  else{
      nav_link=(<><div className="nav_link">
                    <a href="/"> Home </a>
                </div>
                <div className="nav_link">
                  <a href="/user/profile">
                  <img src={ user } className="user_img"/>
                  </a>
                </div></>);
    }

return ( <div className="nav">
              <div className="nav-brand">
                <img src={ logo } className="logo" />
                <h4> InfoG </h4>
              </div>

              <div className="lines" onClick={toggle} ref={line_ref}>  
                <div className="smallline">
                </div>
                <div className="smallline">
                </div>
                <div className="smallline">
                </div>
              </div>

              <div className="nav_list" ref={nav_ref}>
                <div className="crosslines" onClick={toggle} ref={crosslines_ref}>
                </div>
                {nav_link}
              </div>
        </div>);

}

export default Nav;