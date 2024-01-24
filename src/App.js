import { useState } from "react";
import { getPostcodes, getCrimeData } from "./api";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
	const [postcode, setPostcode] = useState("");
	const [crimeData, setCrimeData] = useState([]);

	const handleInputChange = (e) => {
		setPostcode(e.target.value.toUpperCase());
	};

	const handleSearch = async () => {
		try {
			const postcodeData = await getPostcodes(postcode);
			const fetchedCrimeData = await getCrimeData(postcodeData.latitude, postcodeData.longitude);
			setCrimeData(fetchedCrimeData);
		} catch (error) {
			console.error("Error fetching data:", error.message);
		}
	};

	console.log(crimeData)

	return (
		<>
			<Header />
			<SearchBar postcode={postcode} onSearch={handleSearch} onInputChange={handleInputChange} />
		</>
	);
}

export default App;
