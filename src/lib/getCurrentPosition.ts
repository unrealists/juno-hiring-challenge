import { route } from '$lib/route';
import { RATE } from '$lib/constants';

const { positions } = route;

export const getCurrentPosition = (startTime: Date) => {
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
