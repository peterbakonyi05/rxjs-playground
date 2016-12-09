/**
 * When unsubscribing right after subscribe, it will
 * still call the subscriber with the synchronously emitted values.
 * OUTPUT:
 * 1
 * 2
 * COMPLETE
 */
const Rx = require("rxjs");

Rx.Observable.from([1, 2, 3])
	.filter(val => val > 1)
	.subscribe(
		val => console.log(val),
		null,
		() => console.log("COMPLETE")
	)
	.unsubscribe();