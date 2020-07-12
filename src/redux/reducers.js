import { combineReducers } from "redux";

// newState = {...state}
//return newState.login = true
const user = (state = null, action) => {
	switch (action.type) {
		case "LOG_IN":
			return {
				loggedIn: action.value
			};
		case "LOG_OUT":
			return {
				loggedOut: action.value
			};
		default:
			return state;
	}
};

const listings = (state = [], action) => {
	switch (action.type) {
		case "ADD_LISTING":
			return [...state, action.value];
		case "REMOVE_LISTING":
			const listings = [...state];
			listings.splice(action.value, 1);
			return listings;
		default:
			return state;
	}
};

export default combineReducers({ user, listings });
//
