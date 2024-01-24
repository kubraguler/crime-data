import Accordion from "../components/Accordion";

const CrimeTableView = ({ crimeData }) => {
	return (
		<div className="relative max-w-xl mx-auto my-10">
			<Accordion crimeData={crimeData} />
		</div>
	);
};

export default CrimeTableView;
