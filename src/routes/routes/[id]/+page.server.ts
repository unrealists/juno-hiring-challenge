import type { CurrentPosition } from '$lib/getCurrentPosition';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const res = await fetch(`http://localhost:5173/api/routes/${params.id}`);
	if (res.status !== 200) throw error(res.status, { message: res.statusText });
	const data: CurrentPosition = await res.json();
	return data;
};
