import { route } from '$lib/route';
import { RATE } from '$lib/constants';
import { error } from '@sveltejs/kit';

const { positions } = route;

export const getCurrentPosition = (routeId: string, startTime: Date) => {
	// we only have 1 route here, normally we would like to fetch a route by ID from db or sth
	if (routeId !== 'r1')
		throw error(404, {
			message: `Route ${routeId} not found`
		});
	const now = Date.now();
	const timePassed = now - startTime.getTime();
	const numberOfStops = positions.length;
	const stop = Math.floor(timePassed / RATE);
	return {
		stop,
		position: positions[stop % numberOfStops],
		routeId: route.id
	};
};

export type CurrentPosition = ReturnType<typeof getCurrentPosition>;
