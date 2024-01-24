import { useState, useEffect } from "react";
import { formatCategoryTitle } from "../utils/utils";

const Accordion = ({ crimeData }) => {
	const [categories, setCategories] = useState([]);
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	useEffect(() => {
		const crimeCategoryList = crimeData.map((item) => item.category);
		const uniqueCategories = Array.from(new Set(crimeCategoryList));
		setCategories(uniqueCategories);
	}, [crimeData]);

	console.log(crimeData);

	return (
		<div>
			{categories.map((item, index) => (
				<div key={index} className="mb-4">
					<div className="bg-gray-200 p-4 cursor-pointer" onClick={() => toggleAccordion(index)}>
						<h2 className="text-lg text-left font-normal">{formatCategoryTitle(item)}</h2>
					</div>
					{activeIndex === index && (
						<>
							<div className="bg-white p-4 text-left border-b-4 border-sky-950-">
								<p className="leading-loose">Postcode: </p>
								<hr></hr>
								<p className="leading-loose">Date of Crime: </p>
								<hr></hr>
								<p className="leading-loose">Approximate Street Name: </p>
								<hr></hr>
								<p className="leading-loose">Outcome Status: </p>
							</div>
							<div className="bg-white p-4 text-left">
								<p className="leading-loose">Postcode: </p>
								<hr></hr>
								<p className="leading-loose">Date of Crime: </p>
								<hr></hr>
								<p className="leading-loose">Approximate Street Name: </p>
								<hr></hr>
								<p className="leading-loose">Outcome Status: </p>
							</div>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export default Accordion;
