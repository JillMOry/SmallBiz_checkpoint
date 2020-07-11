import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<AppBar position="relative">
			<Toolbar>
				<IconButton color="inherit">
					<MenuIcon />
				</IconButton>
				{/* <Typography variant="h6" style={{ flexGrow: "1" }}>
                    FakeCars.com
                </Typography> */}
				<ul className="nav-list">
					{/* <li className="nav-list-item"> */}

					{/* </li> */}
					<li className="nav-list-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-list-item">
						<Link to="/login">Login</Link>
					</li>
					<li className="nav-list-item">
						<Link to="/remove">Remove (when the project is done)</Link>
					</li>
				</ul>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
