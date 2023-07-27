import { TOUR_START_TIME } from '$lib/constants.js';
import { getCurrentPosition } from '$lib/getCurrentPosition.js';

export const load = async () => {
	return getCurrentPosition('r1', TOUR_START_TIME);
};
