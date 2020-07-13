import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";

import { Container, Paper } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Details = (props) => {
	const id = props.match.params.id;
	let listing = props.listings.find((r) => r.id == id);

	if (!listing) {
		listing = {
			latitude: 30.2672,

			longitude: -97.7431
		};
	}

	const [center, setCenter] = useState({
		lat: parseFloat(listing.latitude),
		lng: parseFloat(listing.longitude)
	});

	const [zoom, setZoom] = useState(14);

	return (
		<div>
			{
				<Container>
					<Container maxWidth="sm">
						<Paper elevation={3} style={{ textAlign: "center" }}>
							{Object.keys(listing).map((key, idx) => {
								return <h5>{listing[key]}</h5>;
							})}
						</Paper>
					</Container>
					<Container style={{ height: "400px", width: "550px" }}>
						<GoogleMapReact
							bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS }}
							center={center}
							defaultZoom={zoom}
							yesIWantToUseGoogleMapApiInternals
						>
							<LocationOnIcon lat={listing.latitude} lng={listing.longitude} />
						</GoogleMapReact>
						<Link to="/">
							<button>Back</button>
						</Link>
						<br />
					</Container>
				</Container>
			}
		</div>
	);
};

export default Details;
