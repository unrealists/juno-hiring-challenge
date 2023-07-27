import { TOUR_START_TIME } from '$lib/constants';
import { getCurrentPosition } from '$lib/getCurrentPosition';

export const load = async ({ params }) => {
	/** NOTE: it's possible to use api/routes/:id to fetch the data, but that is not needed.
	 *  Even in real scenario, direct data load seems more reasonable then calling own endpoint
	 * 
	 * 	const res = await fetch(`${url.origin}/api/routes/${params.id}`);
		if (res.status !== 200) throw error(res.status, { message: res.statusText });
		const data: CurrentPosition = await res.json();
	*/
	return getCurrentPosition(params.id, TOUR_START_TIME);
};
