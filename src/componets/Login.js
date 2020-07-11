import React, { Component } from "react";
import { Link } from "react-router-dom";
// import RemoveListing from "./RemoveListing";
// import "./App.css";

import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Login = (props) => {
	return (
		<Container maxWidth="lg" className="car-container">
			<form
				style={{
					marginTop: "15%",
					display: "flex",
					flexDirection: "column",
					marginTop: "15%",
					marginLeft: "40%"
				}}
			>
				<TextField
					style={{ width: "300px" }}
					placeholder="Username"
					name="username"
					type="text"
					// value={this.state.username}
					// onChange={this.handleChange}
				/>

				<TextField
					style={{ width: "300px" }}
					placeholder="Password"
					name="password"
					type="password"
					// value={this.state.password}
					// onChange={this.handleChange}
				/>
			</form>

			<Button
				style={{ marginLeft: "47%", marginTop: "1%" }}
				variant="contained"
				color="primary"
				onClick={() => props.login()}
			>
				<Link to={`/removelisting`}>Login </Link>
			</Button>
		</Container>
	);
};

export default Login;
