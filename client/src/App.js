import React from 'react';
import './App.css';

import Home from "./components/Home/Home";

import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

import ResetPassword from "./components/ResetPassword/ResetPassword";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";

import EmailVerified from "./components/EmailVerified/EmailVerified";

import Dashboard from "./components/Dashboard/Dashboard";
import UserProfile from "./components/UserProfile/UserProfile";
import Scammer from "./components/Scammer/Scammer";

import Nav from "./components/Nav/Nav";
import Token from "./components/Token/Token";
import Logout from "./components/Logout/Logout";
import NotFound from "./components/NotFound/NotFound";

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import ProtectedRoute from "./components/util/ProtectedRoute";

class App extends React.Component{
render()
{
return ( <Router>
  <>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/token/:id" component={Token} />

      <Route exact path="/user/forget/password" component={ForgetPassword} />
      <Route exact path="/token/:id" component={Token} />
      <Route path="/user/reset/password/:id" component={ResetPassword} />

      <ProtectedRoute path="/user/dashboard" component={Dashboard} />
      <ProtectedRoute path="/user/scammer/id/:id" component={Scammer} />
      <ProtectedRoute path="/user/profile" component={UserProfile} />
      <ProtectedRoute path="/user/logout" component={Logout} />
      <Route component={NotFound}/>
    </Switch>
  </>
</Router>);

}
}

if(module.hot)
{
module.hot.accept();
}
export default App;