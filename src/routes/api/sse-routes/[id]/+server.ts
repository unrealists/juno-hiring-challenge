import { createSSE } from '$lib/sse';
import { emitter } from '$lib/emitter';

export async function GET({ params }) {
	const { readable, subscribe } = createSSE();

	subscribe(emitter, `${params.id}-position`);

	return new Response(readable, {
		headers: {
			'cache-control': 'no-cache',
			'content-type': 'text/event-stream'
		}
	});
}
