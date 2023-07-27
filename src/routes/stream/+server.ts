import { createSSE } from '$lib/sse';
import { emitter } from '$lib/emitter';

export async function GET({ request }) {
	const last_event_id = request.headers.get('last-event-id') || '';

	const { readable, subscribe } = createSSE(last_event_id);

	subscribe(emitter, 'position');

	return new Response(readable, {
		headers: {
			'cache-control': 'no-cache',
			'content-type': 'text/event-stream'
		}
	});
}
