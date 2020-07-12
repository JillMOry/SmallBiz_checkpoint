import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Listings from "./containers/Listings";
import NewListing from "./containers/NewListing";
import RemoveListing from "./containers/RemoveListing";
import Details from "./containers/Details";
import Login from "./containers/Login";

// must set a cookie LoggedIN =true
const checkAuth = () => {
	const cookies = cookie.parse(document.cookie);
	return cookies["loggedIn"] ? true : false;
};

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
			<Route exact path="/" component={Listings} />
			<Route path="/details/:id" component={Details} />
			<ProtectedRoute path="/remove" component={RemoveListing} />
			<ProtectedRoute path="/newlisting" component={NewListing} />
			<Route path="/login" component={Login} />
		</Switch>
	);
};

export default Router;
