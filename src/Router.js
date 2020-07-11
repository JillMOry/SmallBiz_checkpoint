import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Listings from "./containers/Listings";
import NewListing from "./containers/NewListing";
import RemoveListing from "./containers/RemoveListing";
import Details from "./containers/Details";
import Login from "./containers/Login";
// import About from "./components/About";
// import Car from "./containers/Car";
// import Dashboard from "./containers/Dashboard";
// import Import from "./containers/Import";

const checkAuth = () => {
	const cookies = cookie.parse(document.cookie);
	return cookies["loggedIn"] ? true : false;
};
//

const ProtectedRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

const Router = () => {
	return (
		<Switch>
			<Route path="/details/:id" component={Details} />
			<Route exact path="/" component={Listings} />
			<ProtectedRoute path="/remove" component={RemoveListing} />
			<Route path="/login" component={Login} />
		</Switch>
	);
};

export default Router;
