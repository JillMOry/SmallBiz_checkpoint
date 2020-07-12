import React from "react";
import { Link } from "react-router-dom";
import NewListing from "../containers/NewListing";
import {
	Container,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const New = (props) => {
	return (
		<Container maxWidth="lg" className="car-container">
			<div className="flex-container" style={{ justifyContent: "flex-end" }}>
				<NewListing />
			</div>

			<Table>
				<TableHead>
					<TableRow>
						<TableCell>NAME</TableCell>
						<TableCell>DESCRIPTION</TableCell>
						<TableCell>HOURS</TableCell>
						<TableCell>PHONE</TableCell>
						<TableCell>ADDRESS</TableCell>
						<TableCell>DELETE</TableCell>
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
								<DeleteIcon
									// add onClick method here
									onClick={() => props.removeListing(idx)}
									className="icon text-red"
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Container>
	);
};

export default New;
