// lib/gtag.js
export const GA_MEASUREMENT_ID = 'G-C7R89RDYSC';

export const pageview = (url) => {
	window.gtag('config', GA_MEASUREMENT_ID, {
		page_path: url,
	});
};

export const event = ({ action, params }) => {
	window.gtag('event', action, params);
};
