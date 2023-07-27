import { getCurrentPosition } from '$lib/getCurrentPosition.js';
import { route } from '$lib/route';

export const load = async ({ url }) => {
	const start = url.searchParams.get('start');
	const startTime = start ? new Date(start) : undefined;
	const { positions } = route;
	const { position, stop } = getCurrentPosition({ positions, startTime });

	return {
		startTime,
		position,
		stop
	};
};
