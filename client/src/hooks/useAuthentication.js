import jwtDecode from "jwt-decode";

export const isAuthenticated = () => {
	const token = sessionStorage.getItem("token");

	if (!token) {
		// Token doesn't exist
		return false;
	}

	try {
		const decodedToken = jwtDecode(token);
		const currentTime = Date.now() / 1000; // Convert to seconds

		if (decodedToken.exp < currentTime) {
			// Token has expired
			return false;
		}

		// Token is valid and not expired
		return true;
	} catch (error) {
		// Error decoding the token
		return false;
	}
};
