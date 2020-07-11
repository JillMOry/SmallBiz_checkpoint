import React from "react";
import { Link } from "react-router-dom";
import { Container, Paper, Chip, Button } from "@material-ui/core";

const Details = (props) => {
	const id = props.match.params.id;

	let listing = props.listings.find((r) => r.id == id);

	return (
		<div>
			{
				<Container>
					<Container maxWidth="sm">
						<Paper>
							<h2>{listing.id}</h2>
							{Object.keys(listing).map((key, idx) => {
								return (
									<Chip key={idx} label={`${key}: ${listing[key]}`}></Chip>
								);
							})}

							<Link to={`/`}>
								<Button>Home</Button>
							</Link>
						</Paper>
					</Container>
					<br />
				</Container>
			}
		</div>
	);
};

export default Details;
