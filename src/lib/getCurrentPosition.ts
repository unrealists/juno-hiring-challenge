import { route } from '$lib/route';

const { positions } = route;

const RATE = 1000;

export const getCurrentPosition = (startTime?: Date) => {
	const now = Date.now();
	const startTimeStamp = startTime ? startTime.getTime() : now;
	const timePassed = now - startTimeStamp;
	const numberOfStops = positions.length;
	const stop = Math.floor(timePassed / RATE);
	return {
		stop,
		position: positions[(stop % numberOfStops) - 1],
		routeId: route.id
	};
};

export type CurrentPosition = ReturnType<typeof getCurrentPosition>;
