import type { CurrentPosition } from '$lib/getCurrentPosition';
import { HttpError } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const res = await fetch(`http://localhost:5173/api/routes/${params.id}`);
		const data: CurrentPosition = await res.json();
		return data;
	} catch (error) {
		console.log(error);
		if (error instanceof HttpError) {
			console.log(error.body);
			console.log(error.status);
		}
	}
};
