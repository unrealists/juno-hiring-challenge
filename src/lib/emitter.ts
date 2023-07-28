import { EventEmitter } from 'node:events';
import { RATE, TOUR_START_TIME } from '$lib/constants';
import { getCurrentPosition } from '$lib/getCurrentPosition';

// This simulate SSE emitter for r1 route.
// In reality, this would be an SSE capable server and obviously would stream data from any route we want.

export const emitter = new EventEmitter();

setInterval(() => {
	const position = getCurrentPosition('r1', TOUR_START_TIME);
	emitter.emit('r1-position', position);
}, RATE);
