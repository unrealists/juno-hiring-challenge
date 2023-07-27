import { EventEmitter } from 'node:events';
import { RATE, TOUR_START_TIME } from '$lib/constants';
import { getCurrentPosition } from '$lib/getCurrentPosition';

export const emitter = new EventEmitter();

setInterval(() => {
	const position = getCurrentPosition('r1', TOUR_START_TIME);
	emitter.emit('position', position);
}, RATE);
