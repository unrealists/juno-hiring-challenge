import type { Route } from '$lib/route';

interface Params {
	positions: Route['positions'];
	rate?: number;
	startTime?: Date;
}

export const getCurrentPosition = ({ positions, rate = 1000, startTime }: Params) => {
	const now = Date.now();
	const startTimeStamp = startTime ? startTime.getTime() : now;
	const timePassed = now - startTimeStamp;
	const numberOfStops = positions.length;
	const currentStop = Math.floor(timePassed / rate);
	return {
		currentStop,
		currentPosition: positions[(currentStop % numberOfStops) - 1]
	};
};
