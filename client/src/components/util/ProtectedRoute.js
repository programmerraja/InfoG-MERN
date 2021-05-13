import React from "react";


import {Route,Redirect} from "react-router-dom";

import Auth from "../Auth";

function ProtectedRoute({ path,props, component: Component }) {
	return(<Route exact
				path={path}
				render={(props) => (
				Auth.loggedIn==="true" ? 
				<Component {...props} /> :
				<Redirect to='/signin' />
				)}
				/>);
}

export default ProtectedRoute;