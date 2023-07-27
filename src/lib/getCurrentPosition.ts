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
	const stop = Math.floor(timePassed / rate);
	return {
		stop,
		position: positions[(stop % numberOfStops) - 1]
	};
};

export type CurrentPosition = ReturnType<typeof getCurrentPosition>;
