import { getCurrentPosition } from '$lib/getCurrentPosition.js';

export const load = async ({ url }) => {
	const start = url.searchParams.get('start');
	const startTime = start ? new Date(start) : undefined;
	const { position, stop } = getCurrentPosition(startTime);

	return {
		startTime,
		position,
		stop
	};
};
