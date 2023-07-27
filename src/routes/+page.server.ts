import { TOUR_START_TIME } from '$lib/constants.js';
import { getCurrentPosition } from '$lib/getCurrentPosition.js';

export const load = async () => {
	const { position, stop } = getCurrentPosition(TOUR_START_TIME);

	return {
		startTime: TOUR_START_TIME,
		position,
		stop
	};
};
