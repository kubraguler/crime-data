export const formatCategoryTitle = (title) => {
	const titles = title.split("-");
	const capitalizedTitles = titles.map((title) => title.charAt(0).toUpperCase() + title.slice(1));
	const formattedTitle = capitalizedTitles.join(" ");
	return formattedTitle;
};
