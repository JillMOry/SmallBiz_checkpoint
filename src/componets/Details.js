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
						<Paper elevation={3} style={{ textAlign: "center" }}>
							{Object.keys(listing).map((key, idx) => {
								return <h4>{listing[key]}</h4>;
							})}
						</Paper>
					</Container>
					<br />
				</Container>
			}
		</div>
	);
};

export default Details;
