/**
 * `share` operator will share the observable until it is not completed. If a subscriber
 * subscribes after the observable has been completed, it will create a new one.
 * 
 * OUTUT:
 * start (0ms)
 * A (1000ms)
 * B (1000ms)
 * C (1000ms)
 * start (1100ms)
 * D (2100ms)
 */
const Rx = require('rxjs');

const a$ = Rx.Observable.of(1)
	.do(() => console.log("start"))
	.delay(1000)
	.share();

a$.subscribe(() => console.log("A"));
a$.subscribe(() => console.log("B"));

setTimeout(() => a$.subscribe(() => console.log("C")), 100)
setTimeout(() => a$.subscribe(() => console.log("D")), 1100)