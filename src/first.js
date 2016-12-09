/**
 * This is the expected behavior, but it can be tricky.
 * You never enter the subscribe, but it still completes.
 * 
 * OUTPUT: "complete"
 */

const Rx = require('rxjs');

Rx.Observable.interval(500)
	.first()
	.filter(() => false)
	.subscribe(
		data => console.log("next", data),
		err => console.log("err", err),
		() => console.log("complete")
	);