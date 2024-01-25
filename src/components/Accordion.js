import { useState, useEffect } from "react";
import { formatCategoryTitle } from "../utils/utils";

const Accordion = ({ crimeData }) => {
	const [categories, setCategories] = useState([]);
	const [activeIndex, setActiveIndex] = useState(null);
	const [groupedCrimeData, setGroupedCrimeData] = useState({});

	const toggleAccordion = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	useEffect(() => {
		const crimeCategoryList = crimeData.map((item) => item.category);
		const uniqueCategories = Array.from(new Set(crimeCategoryList));
		setCategories(uniqueCategories);

		const groupedData = uniqueCategories.reduce((acc, category) => {
			acc[category] = crimeData.filter((item) => item.category === category);
			return acc;
		}, {});
		setGroupedCrimeData(groupedData);
	}, [crimeData]);

	return (
		<div>
			{categories.map((item, index) => (
				<div key={index} className="mb-4">
					<div className="bg-gray-200 p-4 cursor-pointer" onClick={() => toggleAccordion(index)}>
						<h2 className="flex items-center justify-between text-lg text-left font-normal relative">
							{formatCategoryTitle(item)}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className={`w-5 h-5 inline-block  transition-all ease-in-out duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"}`}
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
							</svg>
						</h2>
					</div>
					{activeIndex === index && (
						<div className="bg-white p-4 text-left">
							{groupedCrimeData[item].map((crime, crimeIndex) => (
								<div key={crimeIndex} className="border-b-4">
									<p className="leading-loose">
										<b>Postcode:</b> {crime.postcode}
									</p>
									<hr></hr>
									<p className="leading-loose">
										<b>Date of Crime:</b> {crime.month}
									</p>
									<hr></hr>
									<p className="leading-loose">
										<b>Approximate Street Name:</b> {crime.location.street.name}
									</p>
									<hr></hr>
									<p className="leading-loose">
										<b>Outcome Status:</b> {crime.outcome_status?.category ? crime.outcome_status.category : "On Going"}
									</p>
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Accordion;
