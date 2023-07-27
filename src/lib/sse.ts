import type { EventEmitter } from 'node:events';

export const createSSE = (retry = 0) => {
	const { readable, writable } = new TransformStream({
		start(controller) {
			if (retry > 0) controller.enqueue(`retry: ${retry}\n\n`);
		},
		transform({ event, data }, controller) {
			const payload = {
				id: `id: ${event}-${Date.now()}\n`,
				event: `event: ${event}\n`,
				data: `data: ${JSON.stringify(data)}\n\n`
			};
			const message = payload.id + payload.event + payload.data;
			controller.enqueue(message);
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
};
