const Rx = require("rxjs");

const s$ = new Rx.Subject();

s$.asObservable()
	// this two line is same as using `pairwaise` operator
	.bufferCount(2, 1)
	.first(([previous, current]) => previous && !current)
	.subscribe(data => {
		console.log(data);
	});

setTimeout(() => s$.next(true), 0);
setTimeout(() => s$.next(false), 200);
