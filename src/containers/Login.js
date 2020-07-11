import { connect } from "react-redux";
import Login from "../componets/Login";
import { login, logout } from "../redux/actions";

// import Details from "../componets/Details";
// import { removeCar } action here
// import { removeCar } from '../redux/actions'

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: () => dispatch(login()),
		logout: () => dispatch(logout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
