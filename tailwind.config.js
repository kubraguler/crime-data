/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			rotate: {
				180: "180deg"
			}
		}
	},
	plugins: [require("@tailwindcss/line-clamp")]
};
