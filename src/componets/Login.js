import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Login extends Component {
	state = {
		username: "",
		password: ""
	};
	handleLogin = () => {
		document.cookie = "loggedIn=true";
		this.props.login(true);
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<div>
				<Container maxWidth="lg" className="car-container">
					<form
						onSubmit={this.login}
						style={{
							marginTop: "15%",
							display: "flex",
							flexDirection: "column",
							marginLeft: "40%"
						}}
					>
						<TextField
							style={{ width: "300px" }}
							placeholder="Username"
							name="username"
							type="text"
							value={this.state.username}
							onChange={(e) => this.handleChange(e)}
						/>

						<TextField
							style={{ width: "300px" }}
							placeholder="Password"
							name="password"
							type="password"
							value={this.state.password}
							onChange={(e) => this.handleChange(e)}
						/>
					</form>
					<Link to={`/remove`}>
						<Button
							style={{ marginLeft: "47%", marginTop: "1%" }}
							variant="contained"
							color="primary"
							onClick={() => this.handleLogin()}
						>
							Login
						</Button>
					</Link>
				</Container>
			</div>
		);
	}
}

export default Login;
