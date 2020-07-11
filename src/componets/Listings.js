import React from "react";
import { Link } from "react-router-dom";
// import listings from "../listings.json";
import {
	Container,
	Button,
	CardActions,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow
} from "@material-ui/core";

const Listings = (props) => {
	// 	render();
	// if (this.state.loggedIn) {
	// 	return <RemoveListing />;
	// } else {
	return (
		<Container maxWidth="lg" className="car-container">
			<h4>Welcome, {props.user.username}</h4>
			<div style={{ textAlign: "center" }}>
				<h1>Add Resturant:</h1>

				{/* <Link to={`/removelisting`}>
					<Button>Modify Resturant List</Button>
				</Link> */}
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

							<TableCell>
								{/* <DeleteIcon
									// add onClick method here
									onClick={() => props.removeCar(idx)}
									className="icon text-red"
								/> */}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Container>
	);
};

export default Listings;
