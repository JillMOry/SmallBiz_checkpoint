import { connect } from "react-redux";
import Navigation from "../componets/Navigation";
import { login, logout } from "../redux/actions";

const mapStateToProps = (state) => {
	return {
		user: state.user,
		loggedIn: state.loggedIn
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: () => dispatch(login()),
		logout: () => dispatch(logout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
