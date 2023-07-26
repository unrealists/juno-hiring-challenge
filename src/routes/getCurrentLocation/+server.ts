import { json } from '@sveltejs/kit';
import { route } from '../route';

const RATE = 1000;

export const GET = ({ url }) => {
	const start = url.searchParams.get('start');
	const now = Date.now();
	const tourStartTime = start ? new Date(start).getTime() : now;
	const timePassed = now - tourStartTime;
	const stops = route.positions.length;

	const currentStop = Math.floor(timePassed / RATE);
	const stop = currentStop % stops;

	return json(route.positions[stop - 1]);
};
