import type { CurrentPosition } from '$lib/getCurrentPosition';

export const load = async () => {
	const res = await fetch('http://localhost:5173/api/routes/r1');
	const data: CurrentPosition = await res.json();
	return data;
};
