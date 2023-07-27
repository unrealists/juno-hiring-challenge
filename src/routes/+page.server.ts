import { route } from '$lib/route';

export const load = ({ url }) => {
	const start = url.searchParams.get('start');
	const now = Date.now();
	const tourStartTime = start ? new Date(start).getTime() : now;

	return {
		route,
		tourStartTime
	};
};
