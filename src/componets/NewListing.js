import React, { Component, Fragment } from "react";
import InputMask from "react-input-mask";
import {
	Button,
	TextField,
	Dialog,
	DialogContent,
	DialogTitle
} from "@material-ui/core";

class NewListing extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			name: "",
			description: "",
			hours: "",
			phone: "",
			address: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggleDialog = () => this.setState({ open: !this.state.open });

	handleTextChange = (e) => {
		const newState = { ...this.state };
		newState[e.target.id] = e.target.value;
		this.setState(newState);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const payload = { ...this.state };
		console.log("THE LISTING", payload);
		this.props.addListing(payload);
		this.setState({ open: false });
	};

	componentDidMount = () => {
		console.log(this.props);
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.open !== this.state.open) {
			this.setState({
				name: "",
				description: "",
				hours: "",
				phone: "",
				address: ""
			});
		}
	};

	render() {
		return (
			<Fragment>
				<div style={{ textAlign: "center" }}>
					<Button
						variant="contained"
						className="add-car"
						onClick={this.toggleDialog}
					>
						Add Resturant
					</Button>
				</div>
				<div>
					<Dialog open={this.state.open} onClose={this.toggleDialog}>
						<DialogTitle>Add New Resturant</DialogTitle>
						<DialogContent>
							<form
								onSubmit={this.handleSubmit}
								style={{
									display: "flex",
									flexDirection: "column",
									width: "500px"
								}}
							>
								<TextField
									id="name"
									placeholder="Name"
									value={this.state.name}
									onChange={this.handleTextChange}
									required
								/>
								<TextField
									id="description"
									placeholder="Description"
									value={this.state.description}
									onChange={this.handleTextChange}
									required
								/>
								<TextField
									id="hours"
									placeholder="Hours"
									value={this.state.hours}
									onChange={this.handleTextChange}
									required
								/>
								<TextField
									ref="phone"
									id="phone"
									placeholder="Phone"
									value={this.state.phone}
									onChange={this.handleTextChange}
									required
								/>
								<address>
									{" "}
									<TextField
										id="address"
										placeholder="Address"
										value={this.state.address}
										onChange={this.handleTextChange}
										required
									/>
								</address>
								<br />
								<Button variant="contained" color="primary" type="submit">
									Submit
								</Button>
							</form>
						</DialogContent>
					</Dialog>
				</div>
			</Fragment>
		);
	}
}

export default NewListing;
