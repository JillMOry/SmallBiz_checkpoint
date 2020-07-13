import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navigation = (props) => {
	console.log(props.user.loggedIn);

	return (
		<AppBar position="relative">
			<Toolbar>
				<Typography variant="h6" style={{ flexGrow: "1" }}>
					Round Rock Resturants
				</Typography>
				<ul className="nav-list">
					<li className="nav-list-item">
						{props.user.loggedIn ? (
							<Link to={`/remove`}>Home</Link>
						) : (
							<Link to={`/`}>Home</Link>
						)}
					</li>
					{props.user.loggedIn ? (
						<li
							className="nav-list-item"
							onClick={() => {
								document.cookie = "loggedIn=";
								props.login(false);

								window.location.replace("/");
							}}
						>
							Logout
						</li>
					) : (
						<li
							className="nav-list-item"
							onClick={() => {
								window.location.replace("/login");
							}}
						>
							Login
						</li>
					)}
				</ul>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
