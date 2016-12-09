/**
 * It is not surprising at all, but in this code
 * both 1 and 2 will be logged after 1 second.
 * 
 * -1-2--------
 * ----(1 sec delay)-1-2-
 */
const Rx = require("rxjs");

Rx.Observable.from([1, 2])
	.delay(1000)
	.subscribe(
		d => console.log(d),
		null,
		() => console.log("done")
	);