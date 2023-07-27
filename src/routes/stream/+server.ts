import { createSSE } from '$lib/sse';
import { emitter } from '$lib/emitter';

export async function GET() {
	const { readable, subscribe } = createSSE();

	subscribe(emitter, 'position');

	return new Response(readable, {
		headers: {
			'cache-control': 'no-cache',
			'content-type': 'text/event-stream'
		}
	});
}
