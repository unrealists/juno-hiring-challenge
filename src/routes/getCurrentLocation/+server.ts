import { json } from '@sveltejs/kit';
import { route } from '$lib/route';
import { getCurrentPosition } from '$lib/getCurrentPosition';

export const GET = ({ url }) => {
	const start = url.searchParams.get('start');
	const startTime = start ? new Date(start) : undefined;
	const { positions } = route;
	const position = getCurrentPosition({ positions, startTime });

	return json(position);
	// return new Response()
};
