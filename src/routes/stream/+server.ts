import { createSSE } from '$lib/sse';
import { bus } from '$lib/bus';

export async function GET({ request }) {
	// does not have to be a number, this is just an example
	const last_event_id = Number(request.headers.get('last-event-id')) || 0;

	const { readable, subscribe } = createSSE(last_event_id);

	subscribe(bus, 'time');
	subscribe(bus, 'date');

	return new Response(readable, {
		headers: {
			'cache-control': 'no-cache',
			'content-type': 'text/event-stream'
		}
	});
}
