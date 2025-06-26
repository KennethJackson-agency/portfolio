import { event as gaEvent } from './gtag';

/**
 * General event tracker for GA4
 * @param {Object} params
 * @param {string} params.action - required
 * @param {string} params.category - optional
 * @param {string} params.label - optional
 * @param {number} params.value - optional
 */
export const trackEvent = ({ action, category, label, value }) => {
	gaEvent({
		action,
		event_category: category || 'general',
		event_label: label || '',
		value: value || 0,
	});
};
