import { connect } from "react-redux";
import Listings from "../componets/Listings";

const mapStateToProps = (state) => {
	return {
		user: state.user,
		listings: state.listings
	};
};

export default connect(mapStateToProps, null)(Listings);
