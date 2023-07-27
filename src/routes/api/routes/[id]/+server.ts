import { TOUR_START_TIME } from '$lib/constants';
import { getCurrentPosition } from '$lib/getCurrentPosition';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const position = getCurrentPosition(params.id, TOUR_START_TIME);
	return json(position);
}
