export const login = (bool) => {
	return {
		type: "LOG_IN",
		value: bool
	};
};

export const logout = () => {
	return {
		type: "LOG_OUT",
		value: false
	};
};

export const addListing = (listing) => {
	return {
		type: "ADD_LISTING",
		value: listing
	};
};

export const removeListing = (index) => {
	return {
		type: "REMOVE_LISTING",
		value: index
	};
};

// export const fetchMakes = () => {
// 	return (dispatch) => {
// 		fetch(url)
// 			.then((res) => res.json())
// 			.then((response) => {
// 				const makes = {
// 					type: "FETCH_MAKES",
// 					value: response.Results
// 				};
// 				dispatch(makes);
// 			});
// 	};
// };

// export const deleteMake = (index) => {
// 	return {
// 		type: "DELETE_MAKE",
// 		value: index
// 	};
// };

//
