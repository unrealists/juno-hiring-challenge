import type { EventEmitter } from 'node:events';

export function createSSE(last_id: string, retry = 0) {
	const id = last_id;
	const { readable, writable } = new TransformStream({
		start(controller) {
			controller.enqueue(': hello\n\n');

			if (retry > 0) controller.enqueue(`retry: ${retry}\n\n`);
		},
		transform({ event, data }, controller) {
			let msg = `id: ${event}-${Date.now()}\n`;
			if (event) msg += `event: ${event}\n`;
			if (typeof data === 'string') {
				msg += 'data: ' + data.trim().replace(/\n+/gm, '\ndata: ') + '\n';
			} else {
				msg += `data: ${JSON.stringify(data)}\n`;
			}
			console.log(msg);
			controller.enqueue(msg + '\n');
		}
	});

	const writer = writable.getWriter();

	return {
		readable,
		async subscribe(eventEmitter: EventEmitter, event: string) {
			function listener(data: unknown) {
				writer.write({ event, data });
			}

			eventEmitter.on(event, listener);
			await writer.closed.catch((e) => {
				console.log(e);
			});
			eventEmitter.off(event, listener);
		}
	};
}
