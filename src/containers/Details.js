import { connect } from "react-redux";

import Details from "../componets/Details";

const mapStateToProps = (state) => {
	return {
		listings: state.listings
	};
};

export default connect(mapStateToProps, null)(Details);
