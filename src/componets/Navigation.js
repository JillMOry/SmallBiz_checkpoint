import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<AppBar position="relative">
			<Toolbar>
				<Typography variant="h6" style={{ flexGrow: "1" }}>
					Round Rock Resturants
				</Typography>
				<ul className="nav-list">
					{/* <li className="nav-list-item"> */}

					{/* </li> */}
					<li className="nav-list-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-list-item">
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
