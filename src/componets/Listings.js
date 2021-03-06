import React from "react";
import { Link } from "react-router-dom";
// import listings from "../listings.json";
import {
	Container,
	Button,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow
} from "@material-ui/core";

const Listings = (props) => {
	function warning() {
		alert("You must login to edit restuarnt list");
	}

	// 	render();
	// if (this.state.loggedIn) {
	// 	return <RemoveListing />;
	// } else {
	return (
		<Container maxWidth="lg" className="car-container">
			<h1>Welcome!</h1>
			<div style={{ textAlign: "right" }}>
				<Link to={`/login`}>
					<Button onClick={warning} variant="contained" className="add-car">
						Modify Resturant List
					</Button>
				</Link>
			</div>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>NAME</TableCell>
						<TableCell>DESCRIPTION</TableCell>
						<TableCell>HOURS</TableCell>
						<TableCell>PHONE</TableCell>
						<TableCell>ADDRESS</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.listings.map((listing, idx) => (
						<TableRow key={listing.id}>
							<TableCell component="th" scope="row">
								<Link to={`/details/${listing.id}`}>{listing["name"]}</Link>
							</TableCell>
							<TableCell>{listing["description"]}</TableCell>
							<TableCell>{listing["hours"]}</TableCell>
							<TableCell>{listing["phone"]}</TableCell>
							<TableCell>{listing["address"]}</TableCell>
							<TableCell></TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Container>
	);
};

export default Listings;
