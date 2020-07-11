import { connect } from "react-redux";
import NewListing from "../componets/NewListing";
import { addListing } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
	return {
		addListing: (listing) => dispatch(addListing(listing))
	};
};

export default connect(null, mapDispatchToProps)(NewListing);
