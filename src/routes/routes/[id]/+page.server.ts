import type { CurrentPosition } from '$lib/getCurrentPosition';
import { error } from '@sveltejs/kit';

export const load = async ({ params, url }) => {
	const res = await fetch(`${url.origin}/api/routes/${params.id}`);
	if (res.status !== 200) throw error(res.status, { message: res.statusText });
	const data: CurrentPosition = await res.json();
	return data;
};
