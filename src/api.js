const options = {
	method: "GET",
	headers: {
		accept: "application/json"
	}
};

export const getPostcodes = async (postcode) => {
	try {
		const postcodeURL = `https://api.getthedata.com/postcode/${postcode}`;

		const result = await fetch(postcodeURL, options);

		if (!result.ok) {
			throw new Error(`Failed to fetch postcode data from ${postcodeURL}. Status: ${result.status}`);
		}

		const data = await result.json();
		return data.data;
	} catch (error) {
		console.error("Error fetching postcode data:", error.message);
		throw error;
	}
};

export const getCrimeData = async (latitude, longitude) => {
	try {
		const crimeDataURL = `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}`;

		const result = await fetch(crimeDataURL, options);

		if (!result.ok) {
			throw new Error(`Failed to fetch crime data from ${crimeDataURL}. Status: ${result.status}`);
		}

		const data = await result.json();
		return data;
	} catch (error) {
		console.error("Error fetching crime data:", error.message);
		throw error;
	}
};
