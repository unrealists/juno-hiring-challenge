import { route } from './route';

export const load = ({ url }) => {
	const start = url.searchParams.get('start');
	const tourStartTime = start ? new Date(start) : new Date();
	return {
		route,
		tourStartTime
	};
};
