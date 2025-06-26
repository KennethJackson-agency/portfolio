export function getReadingTime(text) {
	if (!text) return '0 min read';
	const wordsPerMinute = 200;
	const numberOfWords = text.trim().split(/\s+/).length;
	const minutes = Math.ceil(numberOfWords / wordsPerMinute);
	return `${minutes} min read`;
}
